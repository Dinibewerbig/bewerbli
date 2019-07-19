<template>
  <div class="col-lg-9 col-xl-10">
    <div class="clearfix mb-xs">
      <nuxt-link to="/dashboard/email/inbox" class="page-link" href="#">
        Back
      </nuxt-link>
      <div id="folder-stats" class="d-flex justify-content-end hide">
        <p class="widget-email-count">
          Showing 1 - 10 of 96 messages
        </p>
        <ul class="pagination pagination-sm widget-email-pagination">
          <li class="prev disabled page-item">
            <a class="page-link" href="#">
              <i class="fa fa-chevron-right" />
            </a>
          </li>
          <li class="active page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="next page-item">
            <a class="page-link" href="#">
              <i class="fa fa-chevron-right" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <section class="widget widget-email">
      <header id="widget-email-header">
        <h5>
          Compose <span class="fw-semi-bold">
            New
          </span>
        </h5>
      </header>
      <div id="mailbox-content" class="widget-body">
        <div id="compose-view" class="compose-view">
          <form id="email-compose" class="form-email-compose" @submit.prevent="sendEmail">
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
           
            <button id="send-button" type="submit" :class="['btn', 'btn-primary', { disabled: disabled }]">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
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



<style lang="scss" scoped>
.editorClass {
  border: #29323a;
  border-width: 1px;
}
.btn-group,
.btn-group-vertical {
  position: relative;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: middle;
}

.btn-group .btn.btn-default:not(.active) + .btn.btn-default,
.input-group-append .btn.btn-default,
.input-group-btn .btn.btn-default:not(.active) + .btn.btn-default {
  border-left-color: #c5ced4;
}

.btn-group > .btn-group:not(:last-child) > .btn,
.btn-group > .btn:not(:last-child):not(.dropdown-toggle) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.btn-group > .btn:not(:last-child):not(.dropdown-toggle) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.btn-group > .btn-group:not(:first-child) > .btn,
.btn-group > .btn:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.btn-group > .btn-group:not(:first-child),
.btn-group > .btn:not(:first-child) {
  margin-left: -1px;
}
.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}
.btn.btn-default,
.btn.btn-default.disabled,
.btn.btn-default.disabled:focus,
.btn.btn-default.disabled:hover,
.btn.btn-default[disabled],
.btn.btn-default[disabled]:focus,
.btn.btn-default[disabled]:hover {
  color: #2e353c;
  background: #f2f3f4;
  border-color: #f2f3f4;
}

.btn,
.input-group-addon:focus {
  outline: 0 !important;
}

.btn {
  display: inline-block;
  font-weight: 400;
  color: #495057;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.55;
  border-radius: 0.3rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 12px;
  transition: all 0.1s ease-in-out;
  box-shadow: none !important;
  font-size: 12px;
  margin-bottom: 5px;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: #2e353c;
  background: #f2f3f4;
  border-color: #f2f3f4;
  background-image: linear-gradient(to right, #ffffff26, #fff0);
}
.mb-xs {
  margin-bottom: 0.25rem;
}
.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}

.btn:not(.active),
.btn-inverse:not(.active),
.btn-gray:not(.active) {
  box-shadow: none !important;
}
.width-50 {
  width: 50px;
}

.btn-sm,
.btn-group-sm > .btn {
  padding-top: 0.35rem;
  padding-bottom: 0.35rem;
}

.float-left {
  float: left !important;
}

.btn-sm,
.btn-group-sm > .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.25rem;
}

.btn-default {
  color: #29323a;
  background-color: #e9ecef;
  border-color: #e9ecef;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),
    0 1px 1px rgba(0, 0, 0, 0.075);
}

// .btn {
//   display: inline-block;
//   font-weight: 400;
//   color: #495057;
//   text-align: center;
//   vertical-align: middle;
//   user-select: none;
//   background-color: transparent;
//   border: 1px solid transparent;
//   padding: 0.375rem 0.75rem;
//   font-size: 1rem;
//   line-height: 1.55;
//   border-radius: 0.3rem;
//   transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
//     border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
// }

.justify-content-end {
  justify-content: flex-end !important;
}

.d-flex {
  display: flex !important;
}

.widget {
  position: relative;
  margin-bottom: 40px;
  padding: 20px 20px;
  background: #fff;
  border-radius: 0.35rem;
  box-shadow: 0 23px 20px -20px rgba(115, 162, 208, 0.1),
    0 0 15px rgba(115, 162, 208, 0.06);
}

.widget > header {
  margin: -20px -20px;
  padding: 20px 20px;
}

.widget > header + .widget-body,
.widget > header + .widget-body.p-0 {
  margin-top: 20px;
}

.form-group {
  margin-bottom: 1rem;
}

ul.wysihtml5-toolbar {
  margin: 0;
  padding: 0;
  display: block;
}

.form-control {
  display: block;
  width: 100%;
  height: calc(2.3rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.55;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #c1ccd3;
  border-radius: 0.3rem;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>
