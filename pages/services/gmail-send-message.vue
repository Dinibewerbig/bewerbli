<template>
  <section class="container">
    <div v-show="isShow">
      <h1>Gmail API Send message</h1>
      <!-- Send message button  -->
      <a
        id="compose-button"
        href="#compose-modal"
        data-toggle="modal"
        class="btn btn-primary pull-right"
      >
        Send Email
      </a>
      <!-- Send message form  -->
      <div id="compose-modal" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">
                  &times;
                </span>
              </button>
              <h4 class="modal-title">
                Compose
              </h4>
            </div>
            <form @submit.prevent="sendEmail">
              <div class="modal-body">
                <div class="form-group">
                  <input
                    id="compose-to"
                    v-model.trim="toEmail"
                    type="email"
                    class="form-control"
                    placeholder="To"
                    required
                  >
                </div>

                <div class="form-group">
                  <input
                    id="compose-subject"
                    v-model.trim="subjectEmail"
                    type="text"
                    class="form-control"
                    placeholder="Subject"
                    required
                  >
                </div>

                <div class="form-group">
                  <textarea
                    id="compose-message"
                    v-model.trim="textEmail"
                    class="form-control"
                    placeholder="Message"
                    rows="10"
                    required
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">
                  Close
                </button>
                <button id="send-button" type="submit" :class="['btn', 'btn-primary', { disabled: disabled }]">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import GMail from '~/plugins/gmail.class'

export default {
  middleware: 'authenticated',
  data: function() {
    return {
      title: 'Method: Users.messages.send',
      description:
        'Sends the specified message to the recipients in the To, Cc, and Bcc headers.',
      toEmail: '',
      subjectEmail: '',
      textEmail: '',
      disabled: false,
      isShow: false
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description }
      ]
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      if (this.config.debug) {
        console.log('gmail-send-message.mounted - OK')
      }
      if (!this.isTesting) {
        if (window.gapi.client.gmail) {
          this.isShow = true
        } else {
          // Load Gmail Api
          this.apiGoogle.loadGmailApi().then(() => {
            if (this.config.debug) {
              console.log('loadGmailApi - OK')
            }
            this.isShow = true
          })
        }
      } else {
        this.isShow = true
      }
    })
  },
  computed: {
    ...mapGetters({
      config: 'getConfig',
      apiGoogle: 'getGapi',
      google: 'getGoogleData',
      isTesting: 'isTesting',
      auth: 'getAuth'
    })
  },
  methods: {
    sendEmail: function() {
      this.disabled = true
      if (!this.isTesting) {
        const params = {
          userId: 'me',
          to: this.toEmail,
          subject: this.subjectEmail,
          message: `<h4><i>Sender: ${
            this.auth.user.fullName
          }</i></h4><h3>Message:</h3><p><strong>${this.textEmail}</strong></p>`,
          callback: this.composeTidy
        }
        new GMail().send(params)
      } else {
        window.setTimeout(() => {
          alert(
            `SendEmail - OK:\n toEmail="${this.toEmail}";\n subjectEmail="${
              this.subjectEmail
            }";\n textEmail="${this.textEmail}";`
          )
          this.composeTidy()
        }, 2000)
      }
    },
    composeTidy: function() {
      // Hide windows
      // window.$('#compose-modal').modal('hide')

      if (this.config.debug) {
        console.log(
          'SendEmail - OK: ',
          `toEmail="${this.toEmail}"; `,
          `subjectEmail="${this.subjectEmail}"; `,
          `textEmail="${this.textEmail}";`
        )
      }
      // Clear form fields
      this.toEmail = ''
      this.subjectEmail = ''
      this.textEmail = ''
      // Set disabled = false
      this.disabled = false
    }
  }
}
</script>
