<template>
  <div>
    <!-- begin vertical-box-row -->
    <div class="vertical-box-row bg-white">
      <!-- begin vertical-box-cell -->
      <div class="vertical-box-cell">
        <!-- begin vertical-box-inner-cell -->
        <div class="vertical-box-inner-cell">
          <!-- begin scrollbar -->
          <div data-scrollbar="true" data-height="100%" class="p-15">
            <!-- begin email form -->
            <form id="email-compose" class="form-email-compose" @submit.prevent="sendEmail">
              <!-- begin email to -->
              <div class="email-to">
                <span class="float-right-link">
                  <a href="#" data-click="add-cc" data-name="Cc" class="m-r-5">
                    Cc
                  </a>
                  <a href="#" data-click="add-cc" data-name="Bcc">
                    Bcc
                  </a>
                </span>
                <label class="control-label">
                  To:
                </label>
                <input
                  id="compose-to"
                  v-model.trim="toEmail"
                  type="email"
                  class="form-control primary line-mode"
                  placeholder="To"
                  required
                >
              </div>
              <!-- end email to -->
											
              <div data-id="extra-cc" />
											

              <div class="form-group email-subject">
                <input
                  id="compose-subject"
                  v-model.trim="subjectEmail"
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Subject"
                  required
                >
              </div>
              <!-- begin email subject -->
           
              <!-- end email subject -->
              <!-- begin email content -->
              <div class="email-content p-t-15">
                <editor-content
                  id="compose-message"
                  v-model.trim="textEmail"

                  placeholder="Message"
                  rows="10"
                  required
                  :editor="editor"
                />
              </div>

              <div class="form-group">
                <editor-menu-bar v-slot="{ commands, isActive }" :editor="editor">
                  <div class="menubar">
                    <div class="btn-group">
                      <button
                        class="btn btn-default font-bold"
                        :class="{ 'is-active': isActive.bold() }"
                        @click.prevent="commands.bold"
                      >
                        Bold
                      </button>

                      <button
                        class="btn btn-default italic"
                        :class="{ 'is-active': isActive.italic() }"
                        @click.prevent="commands.italic"
                      >
                        Italic
                      </button>
                      <button
                        class="btn btn-default underline"
                        :class="{ 'is-active': isActive.underline() }"
                        @click.prevent="commands.underline"
                      >
                        Underline
                      </button>
                    </div>

                


                    <button
                      class="btn"
                      :class="{ 'is-active': isActive.paragraph() }"
                      @click.prevent="commands.paragraph"
                    >
                      <icon name="paragraph" />
                    </button>

                    <button
                      class="btn"
                      :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                      @click.prevent="commands.heading({ level: 1 })"
                    >
                      H1
                    </button>

                    <button
                      class="btn"
                      :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                      @click.prevent="commands.heading({ level: 2 })"
                    >
                      H2
                    </button>

                    <button
                      class="btn"
                      :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                      @click.prevent="commands.heading({ level: 3 })"
                    >
                      H3
                    </button>

                    <button
                      class="btn"
                      :class="{ 'is-active': isActive.bullet_list() }"
                      @click.prevent="commands.bullet_list"
                    >
                      <icon name="ul" />
                    </button>

                    <button
                      class="btn"
                      :class="{ 'is-active': isActive.ordered_list() }"
                      @click.prevent="commands.ordered_list"
                    >
                      <icon name="ol" />
                    </button>

                  

                 

                 
                    <button
                      class="btn"
                      @click.prevent="commands.undo"
                    >
                      <icon name="undo" />
                    </button>

                    <button
                      class="btn"
                      @click.prevent="commands.redo"
                    >
                      <icon name="redo" />
                    </button>
                  </div>
                </editor-menu-bar>
                <editor-content
                  id="compose-message"
                  v-model.trim="textEmail"

                  placeholder="Message"
                  rows="10"
                  required
                  :editor="editor"
                />
              </div>
            <!-- end email content -->
            </form>
          <!-- end email form -->
          </div>
        <!-- end scrollbar -->
        </div>
      <!-- end vertical-box-inner-cell -->
      </div>
    <!-- end vertical-box-cell -->
    </div>
    <div class="wrapper bg-silver text-right">
      <button type="submit" class="btn btn-white p-l-40 p-r-40 m-r-5">
        Discard
      </button>
      <button id="send-button" type="submit" class="btn btn-primary p-l-40 p-r-40">
        Send
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GMail from '~/plugins/gmail.class'
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import Icon from '~/components/icon'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History
} from 'tiptap-extensions'

export default {
  middleware: 'authenticated',
  components: {
    EditorContent,
    EditorMenuBar,
    Icon
  },
  data: function() {
    return {
      title: 'Method: Users.messages.send',
      description:
        'Sends the specified message to the recipients in the To, Cc, and Bcc headers.',
      toEmail: '',
      subjectEmail: '',
      textEmail: '',
      disabled: false,
      isShow: false,
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new BulletList(),
          new OrderedList(),
          new ListItem(),
          new TodoItem(),
          new TodoList(),
          new Bold(),
          new Code(),
          new Italic(),
          new Link(),
          new Strike(),
          new Underline(),
          new History()
        ],
        content: `
          <h1>Yay Headlines!</h1>
          <p>All these <strong>cool tags</strong> are working now.</p>
        `
      })
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
  computed: {
    ...mapGetters({
      config: 'getConfig',
      apiGoogle: 'getGapi',
      google: 'getGoogleData',
      isTesting: 'isTesting',
      auth: 'getAuth'
    })
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

  beforeDestroy() {
    this.editor.destroy()
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
