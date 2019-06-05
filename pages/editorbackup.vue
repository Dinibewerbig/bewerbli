<template>
  <div class="control-section">
    <div class="sample-container">
      <div class="default-section">
        <div
          id="documenteditor_titlebar"
          ref="de_titlebar"
          class="e-de-ctn-title flex justify-between"
        >
          <div class>
            <div v-if="currentUser" class="flex items-center mb-8">
              <div class="ml-3 flex-1">
                <div class="text-info1 text-sm text-white leading-tight">
                  {{ userProfile.name }}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              id="documenteditor_title_contentEditor"
              class="single-line"
              title="Document Name. Click or tap to rename this document."
              contenteditable="false"
            >
              <!-- <input
                v-model="documentName"
               
                :style="titileStyle"
              >
  
              </input>-->
              <span>{{ documentName }}</span>
            </div>

            <ejs-button
              id="de-print"
              :style="iconStyle"
              :icon-css="exportIconCss"
              title="Save this document."
              @click.native="saveBtnClick()"
            >
              Save
            </ejs-button>
            <ejs-button
              id="de-print"
              :style="iconStyle"
              :icon-css="exportIconCss"
              title="Open this document."
              @click.native="openDocument"
            >
              Open
            </ejs-button>
            <ejs-button
              id="de-print"
              :style="iconStyle"
              :icon-css="printIconCss"
              title="Print this document (Ctrl+P)."
              @click.native="printBtnClick"
            >
              Print
            </ejs-button>
            <ejs-dropdownbutton
              ref="de-export"
              :style="iconStyle"
              :items="exportItems"
              :icon-css="exportIconCss"
              css-class="e-caret-hide"
              content="Download"
              :select="onExport"
              :open="openExportDropDown"
              title="Download this document."
            />

            <ejs-button
              :style="iconStyle"
              :icon-css="printIconCss"
              class="no-underline text-white inline-block"
     
              @click.native="saveBtnClick('/dashboard/fragebogen/dokumente')"
            >
              Zurück
            </ejs-button>
            <ejs-button
              :style="iconStyle"
              :icon-css="printIconCss"
              class="no-underline text-white inline-block"
     
              @click.native="saveAsPdf()"
            >
              Save as Pdf
            </ejs-button>
            <ejs-button
              :style="iconStyle"
              :icon-css="printIconCss"
              class="no-underline text-white inline-block"
     
              @click.native="saveAsPdf2()"
            >
              Save as Pdf2
            </ejs-button>
            <label>
              File
              <input id="file" ref="file" type="file" @change="handleFileUpload()">
            </label>
            <ejs-button @click.native="submitFile()">
              Submit
            </ejs-button>
          </div>
        </div>
      </div>
      <ejs-documenteditorcontainer
        id="container"
        ref="doceditcontainer"
        :enable-toolbar="true"
        style="height:calc(100vh - 37px);"
      />
    </div>
  </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'

import {
  Toolbar,
  Print,
  Editor,
  Selection,
  EditorHistory,
  PageSetupDialog,
  SfdtExport,
  WordExport
} from '@syncfusion/ej2-vue-documenteditor'

const fb = require('~/services/firebaseConfig.js')
export default {
  layout: 'empty',

  data() {
    return {
      hostUrl: 'https://ej2services.syncfusion.com/production/web-services/',
      documentName: 'Getting there',
      iconStyle:
        'float:right;background: transparent;box-shadow:none;border-color: transparent;border-radius: 2px;color:inherit;font-size:12px;text-transform:capitalize;margin-top:4px;height:28px;font-weight:400;font-family:inherit;',
      titileStyle:
        'text-transform:capitalize;font-weight:400;font-family:inherit;text-overflow:ellipsis;white-space:pre;overflow:hidden;user-select:none;cursor:text',
      openIconCss: 'e-de-icon-Open e-de-padding-right',
      printIconCss: 'e-de-icon-Print e-de-padding-right',
      exportIconCss: 'e-de-icon-Download e-de-padding-right',
      exportItems: [
        { text: 'Microsoft Word (.docx)', id: 'word' },
        { text: 'Syncfusion Document Text (.sfdt)', id: 'sfdt' }
      ],
      jsonData: [],
      uri: '',
      id: '',
      file: '',
      id2: ''
    }
  },
  computed: {
    ...mapState(['currentUser', 'userProfile'])
  },
  provide: {
    DocumentEditorContainer: [
      Toolbar,
      Print,
      Editor,
      Selection,
      EditorHistory,
      PageSetupDialog,
      SfdtExport,
      WordExport
    ]
  },

  mounted() {
    // this.$nextTick(function() {
    //   fb.usersCollection
    //     .doc(this.currentUser.uid)
    //     .collection('dokumente')
    //     .doc('Template1')
    //     .get()
    //     .then(res => {
    //       const newData = JSON.stringify(res.data())
    //       this.$refs.doceditcontainer.ej2Instances.documentEditor.open(newData)
    //     })
    // this.$refs.doceditcontainer.ej2Instances.locale = 'en-US'
    // const obj = this.$refs.doceditcontainer.ej2Instances.documentEditor
    // obj.open(JSON.stringify())
    // obj.documentName = 'Getting Started'
    // this.$refs.doceditcontainer.ej2Instances.serviceUrl =
    //   this.hostUrl + 'api/documenteditor/import'
    // obj.documentChange = () => {
    //   this.documentChangedEvent()
    // }
    // })
    // setInterval(function() {
    //   this.saveBtnClick()
    // }, 10000)
  },

  created() {
    this.$bus.$on('openFile', value => {
      this.openDocument(value)
      this.documentName = value
    })
    this.$bus.$on('deleteFile', value => {
      this.deleteDocument(value)
    })
  },

  methods: {
    // changeDocument: function(value) {
    //   this.documentName = value
    //   this.openDocument(this.documentName)
    // },
    // triggerSave: function() {
    //   setTimeout(() => {
    //     this.saveBtnClick()
    //   }, 1000)
    // },

    onExport: function(args) {
      switch (args.item.id) {
        case 'word':
          this.save('Docx')
          break
        case 'sfdt':
          this.save('Sfdt')
          break
      }
    },
    openExportDropDown: function() {
      // tslint:disable-next-line:max-line-length
      document
        .getElementById('word')
        .setAttribute(
          'title',
          'Download a copy of this document to your computer as a DOCX file.'
        )
      // tslint:disable-next-line:max-line-length
      document
        .getElementById('sfdt')
        .setAttribute(
          'title',
          'Download a copy of this document to your computer as an SFDT file.'
        )
    },
    save: function(format) {
      // tslint:disable-next-line:max-line-length
      this.$refs.doceditcontainer.ej2Instances.documentEditor.save(
        this.documentName === '' ? 'sample' : this.documentName,
        format
      )
    },
    openBtnClick: function() {
      this.$refs.uploadDocument.click()
    },
    printBtnClick: function() {
      this.$refs.doceditcontainer.ej2Instances.documentEditor.print()
    },

    saveAsDocx: function() {
      this.$refs.doceditcontainer.ej2Instances.documenteditor.save(
        'sample',
        'Docx'
      )
    },
    saveBtnClick: function(route) {
      console.log('hat es eine' + route)
      console.log(this.documentName)
      const sfdt = this.$refs.doceditcontainer.ej2Instances.documentEditor.serialize(
        'this.documentName'
      )
      this.jsonData = JSON.parse(sfdt)
      fb.usersCollection
        .doc(this.currentUser.uid)
        .collection('dokumente')
        .doc(this.documentName)
        .set(this.jsonData)
        .then(ref => {
          this.$store.dispatch('fetchDocumentsList')
          if (route) {
            this.$router.push(route)
          } else {
            console.log('saved ' + this.documentName)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteDocument: function(documentName) {
      fb.usersCollection
        .doc(this.currentUser.uid)
        .collection('dokumente')
        .doc(documentName)
        .delete()
        .then(ref => {
          this.$store.dispatch('fetchDocumentsList')
        })
        .catch(err => {
          console.log(err)
        })
    },
    openDocument: function(documentName) {
      fb.usersCollection
        .doc(this.currentUser.uid)
        .collection('dokumente')
        .doc(documentName)
        .get()
        .then(res => {
          const newData = JSON.stringify(res.data())
          if (newData) {
            this.$refs.doceditcontainer.ej2Instances.documentEditor.open(
              newData
            )
          }
        })
        .catch(err => {
          console.log(err)
        })
    },

    saveAsPdf: function() {
      const data = JSON.stringify({
        input: [
          {
            type: 'remote',
            source:
              'https://static.online-convert.com/example-file/raster%20image/jpg/example_small.jpg'
          }
        ],
        conversion: [
          {
            category: 'image',
            target: 'png'
          }
        ]
      })

      const config = {
        headers: {
          'x-oc-api-key': '2e217efa1f26160e9a033908c978256c',
          'cache-control': 'no-cache',
          'content-type': 'application/json'
        }
      }
      axios
        .post('https://api2.online-convert.com/jobs', data, config)
        .then(response => {
          console.log(response.data)
          this.id = response.data.id
          console.log(this.id)
          const uri = 'https://api2.online-convert.com/jobs/' + this.id
          console.log(uri)

          const trigger = setInterval(function() {
            const config = {
              headers: {
                'x-oc-api-key': '2e217efa1f26160e9a033908c978256c',
                'cache-control': 'no-cache',
                'Content-Type': 'image/png'
              }
            }
            axios
              .get(uri, config)
              .then(response => {
                if (response.data.status.code === 'completed') {
                  clearInterval(trigger)
                  const downloadUrl = response.data.output[0].uri
                  const link = document.createElement('a')
                  link.href = downloadUrl
                  link.setAttribute('download', 'file.png')
                  document.body.appendChild(link)
                  link.click()
                }
              })
              .catch(err => {
                console.log(err)
              })
          }, 1000)
        })
        .catch(err => {
          console.log(err)
        })
    },
    saveAsPdf2: function() {
      const data = JSON.stringify({
        conversion: [
          {
            category: 'image',
            target: 'png'
          }
        ]
      })
      const config = {
        headers: {
          'x-oc-api-key': '2e217efa1f26160e9a033908c978256c',
          'cache-control': 'no-cache',
          'content-type': 'application/json'
        }
      }
      axios
        .post('https://api2.online-convert.com/jobs', data, config)
        .then(response => {
          console.log(response.data)
          console.log(response.data.id)
          console.log(response.data.server)

          const uri = response.data.server + '/upload-file/' + response.data.id
          this.uri = uri
          console.log(uri)

          //   const trigger = setInterval(function() {
          //     const config = {
          //       headers: {
          //         'x-oc-api-key': '2e217efa1f26160e9a033908c978256c',
          //         'cache-control': 'no-cache',
          //         'Content-Type': 'image/png'
          //       }
          //     }
          //     axios
          //       .get(uri, config)
          //       .then(response => {
          //         if (response.data.status.code === 'completed') {
          //           clearInterval(trigger)
          //           const downloadUrl = response.data.output[0].uri
          //           const link = document.createElement('a')
          //           link.href = downloadUrl
          //           link.setAttribute('download', 'file.png')
          //           document.body.appendChild(link)
          //           link.click()
          //         }
          //       })
          //       .catch(err => {
          //         console.log(err)
          //       })
          //   }, 1000)
        })
        .catch(err => {
          console.log(err)
        })
    },

    handleFileUpload() {
      this.file = this.$refs.file.files[0]
    },

    submitFile() {
      console.log(this.uri)
      const formData = new FormData()
      formData.append('file', this.file)
      axios
        .post(this.uri, formData, {
          headers: {
            'x-oc-api-key': '2e217efa1f26160e9a033908c978256c',
            'cache-control': 'no-cache',
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(response => {
          console.log(response.data)
          this.id2 = response.data.job
          console.log(this.job)
          const uri = 'https://api2.online-convert.com/jobs/' + this.id2
          console.log(uri)

          // const trigger = setInterval(function() {
          //   const config = {
          //     headers: {
          //       'x-oc-api-key': '2e217efa1f26160e9a033908c978256c',
          //       'cache-control': 'no-cache',
          //       'Content-Type': 'image/png'
          //     }
          //   }
          //   axios
          //     .get(uri, config)
          //     .then(response => {
          //       if (response.data.status.code === 'completed') {
          //         clearInterval(trigger)
          //         const downloadUrl = response.data.output[0].uri
          //         const link = document.createElement('a')
          //         link.href = downloadUrl
          //         link.setAttribute('download', 'file.png')
          //         document.body.appendChild(link)
          //         link.click()
          //       }
          //     })
          //     .catch(err => {
          //       console.log(err)
          //     })
          // }, 1000)
        })
        .catch(err => {
          console.log(err)
        })
        .catch(function() {
          console.log('FAILURE!!')
        })
    },
    print: function() {
      // console.log('printing')
      // const sfdtData = this.$refs.documenteditor.serialize()
      // this.$refs.pagesetup_documenteditor.open(sfdtData)
      // // Set A5 paper size
      // this.$refs.pagesetup_documenteditor.ej2Instances.selection.sectionFormat.pageWidth = 419.55
      // this.$refs.pagesetup_documenteditor.ej2Instances.selection.sectionFormat.pageHeight = 595.3
      // this.$refs.pagesetup_documenteditor.print()
      this.$refs.doceditcontainer.ej2Instances.documentEditor.print()
    }
  }
}
</script>

<style>
#documenteditor_titlebar {
  height: 36px;
  line-height: 26px;
  width: 100%;
  font-size: 12px;
  padding-left: 15px;
  padding-right: 10px;
  font-family: inherit;
}

#documenteditor_title_contentEditor {
  height: 26px;
  max-width: 85%;
  width: auto;
  overflow: hidden;
  display: inline-block;
  padding-left: 4px;
  padding-right: 4px;
  margin: 5px;
}

[contenteditable='true'].single-line {
  white-space: nowrap;
  border-color: #e4e4e4 !important;
}

/** Document editor sample level font icons*/

@font-face {
  font-family: 'Sample brower icons';
  src: url(data:application/x-font-ttf;charset=utf-8;base64,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bwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAHUAcwBpAG4AZwAgAFMAeQBuAGMAZgB1AHMAaQBvAG4AIABNAGUAdAByAG8AIABTAHQAdQBkAGkAbwB3AHcAdwAuAHMAeQBuAGMAZgB1AHMAaQBvAG4ALgBjAG8AbQAAAAACAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEMBAgEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESARMBFAEVARYBFwEYARkBGgEbARwBHQEeAR8BIAEhASIBIwEkASUBJgEnASgBKQEqASsBLAEtAS4BLwEwATEBMgEzATQBNQE2ATcBOAE5AToBOwE8AT0BPgE/AUABQQFCAUMBRAALU3Ryb2tlU3R5bGUIQm9va21hcmsHUGljdHVyZQRGaW5kDU91dHNpZGVCb3JkZXIHSnVzdGlmeQVDbG9zZQ5EZWNyZWFzZUluZGVudBVQaXhlbEFsaWduQ2VudGVyVGFibGUPQmFja2dyb3VuZENvbG9yC0FsaWduQm90dG9tCVBhZ2VTZXR1cA5IaWdobGlnaHRDb2xvcgtTdXBlcnNjcmlwdAVUYWJsZQRVbmRvC0luc2VydEJlbG93CVRvcEJvcmRlcgpQYWdlTnVtYmVyEEFsaWduQ2VudGVyVGFibGUOSW5jcmVhc2VJbmRlbnQEQm9sZAlBbGlnbkxlZnQGRm9vdGVyC0luc2VydFJpZ2h0CVVuZGVybGluZQpJbnNlcnRMZWZ0BExvY2sGSGVhZGVyDVN0cmlrZXRocm91Z2gIQ2xlYXJBbGwLUmlnaHRCb3JkZXIKQWxpZ25SaWdodARPcGVuClN0cm9rZVNpemUFUHJpbnQLRGVsZXRlVGFibGUJRm9udENvbG9yDUluc2lkZUJvcmRlcnMKRGVsZXRlUm93cwhEb3dubG9hZAtMaW5lU3BhY2luZxRJbnNpZGVWZXJ0aWNhbEJvcmRlcghBbGlnblRPcARSZWRvDEJvdHRvbUJvcmRlcgNOZXcFUGFzdGUHQnVsbGV0cwRDZWxsDURlbGV0ZUNvbHVtbnMKQWxsQm9yZGVycwlTdWJzY3JpcHQQU2hvd0hpZGVQcm9wZXJ0eQ5UYWJsZU9mQ29udGVudAZJdGFsaWMWSW5zaWRlSG9yaXpvbmRhbGJvcmRlcgtMZWZ0Qm9yZGVycwlOdW1iZXJpbmcETGluawtBbGlnbkNlbnRlcgtJbnNlcnRBYm92ZQZCcmVha3MITmV4dFBhZ2USU2VsZWN0ZnJvbUNvbXB1dGVyCVBhZ2VCcmVhawAAAAA=)
    format('truetype');
  font-weight: normal;
  font-style: normal;
}

[class^='e-de-icon-'],
[class*=' e-de-icon-'] {
  font-family: 'Sample brower icons' !important;
}

.e-de-icon-Print:before {
  content: '\e723';
}

.e-de-icon-Download:before {
  content: '\e728';
}
</style>
