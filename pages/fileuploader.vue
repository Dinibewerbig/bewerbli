<template>
  <div>
    <button
      v-if="!uploadEnd && !uploading"
      @click.native="selectFile"
    >
      Upload a cover image
      <icon
        right
        aria-hidden="true"
      >
        add_a_photo
      </icon>
    </button>
    <input
      id="files"
      ref="uploadInput"
      type="file"
      name="file"
      accept="*"
      :multiple="false"
      @change="detectFiles($event)"
    >
    <v-progress-circular
      v-if="uploading && !uploadEnd"
      :size="100"
      :width="15"
      :rotate="360"
      :value="progressUpload"
      color="primary"
    >
      {{ progressUpload }}%
    </v-progress-circular>
    <img
      v-if="uploadEnd"
      :src="downloadURL"
      width="100%"
    >
    <div v-if="uploadEnd">
      <button
        class="ma-0"
        dark
        small
        color="error"
        @click="deleteImage()"
      >
        Delete
      </button>
    </div>
  </div>
  </div>
</template>

<script>
// Thanks Marcelo Forclaz(https://github.com/CristalT) https://gist.github.com/CristalT/2651023cfa2f36cddd119fd979581893
// Thanks Matteo Leoni(https://github.com/signalkuppe) https://github.com/signalkuppe/vuetify-cloudinary-upload/blob/master/src/components/v-cloudinary-upload.vue
import { firestorage } from '~/services/firebaseConfig.js'
import { mapState } from 'vuex'
const fb = require('~/services/firebaseConfig.js')

export default {
  props: [],
  layout: 'empty',
  data() {
    return {
      progressUpload: 0,
      fileName: '',
      uploadTask: '',
      uploading: false,
      uploadEnd: false,
      downloadURL: ''
    }
  },
  computed: {
    ...mapState([
      'userProfile',
      'currentUser',
      {
        user: state => state.currentUser
      }
    ])
  },
  watch: {
    uploadTask: function() {
      this.uploadTask.on(
        'state_changed',
        sp => {
          this.progressUpload = Math.floor(
            (sp.bytesTransferred / sp.totalBytes) * 100
          )
        },
        null,
        () => {
          this.uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            this.uploadEnd = true
            this.downloadURL = downloadURL
            this.$emit('downloadURL', downloadURL)

            fb.blobsCollection
              .doc(this.currentUser.uid + this.filename)
              .set({
                createdOn: new Date(),
                fileName: this.fileName,
                fileUrl: this.downloadURL,
                userId: this.currentUser.uid
              })
              .then(ref => {})
              .catch(err => {
                console.log(err)
              })
          })
        }
      )
    }
  },
  created() {
    if (this.oldImgUrl) this.setCoverImgOnUpdate()
    console.log('hello' + this.oldImgUrl)
  },
  methods: {
    selectFile() {
      this.$refs.uploadInput.click()
    },
    detectFiles(e) {
      const fileList = e.target.files || e.dataTransfer.files
      Array.from(Array(fileList.length).keys()).map(x => {
        this.upload(fileList[x])
      })
    },
    upload(file) {
      this.fileName = file.name
      this.uploading = true
      this.uploadTask = firestorage.ref('images/' + file.name).put(file)
    },
    deleteImage() {
      firestorage
        .ref('images/' + this.fileName)
        .delete()
        .then(() => {
          this.uploading = false
          this.uploadEnd = false

          fb.blobsCollection
            .doc(this.currentUser.uid + this.filename)
            .delete()
            .then(ref => {
              this.downloadURL = ''
            })
            .catch(err => {
              console.log(err)
            })
        })
        .catch(error => {
          console.error(`file delete error occured: ${error}`)
        })
    }
  }
}
</script>

<style>
.progress-bar {
  margin: 10px 0;
}
/* input[type='file'] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
} */
</style>
