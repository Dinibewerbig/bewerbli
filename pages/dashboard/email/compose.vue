<template>
  <!-- begin vertical-box -->
 
  <!-- begin vertical-box -->
  <div class="vertical-box">
    <!-- begin wrapper -->
    <div class="wrapper bg-silver">
      <span class="btn-group m-r-5">
        <button class="btn btn-white btn-sm" @click.prevent="sendEmail">
          <i class="fa fa-envelope f-s-14 m-r-3 m-r-xs-0 t-plus-1" /> <span class="hidden-xs">
            Send
          </span>
        </button>
        <a href="javascript:;" class="btn btn-white btn-sm">
          <i class="fa fa-paperclip f-s-14 m-r-3 m-r-xs-0 t-plus-1" /> <span class="hidden-xs">
            Attach
          </span>
        </a>
      </span>
      <span class="dropdown">
        <a href="javascript:;" class="btn btn-white btn-sm" data-toggle="dropdown">
          <i class="fa fa-ellipsis-h f-s-14 t-plus-1" />
        </a>
        <ul class="dropdown-menu dropdown-menu-left">
          <li>
            <a href="javascript:;">
              Save draft
            </a>
          </li>
          <li>
            <a href="javascript:;">
              Show From
            </a>
          </li>
          <li>
            <a href="javascript:;">
              Check names
            </a>
          </li>
          <li>
            <a href="javascript:;">
              Switch to plain text
            </a>
          </li>
          <li>
            <a href="javascript:;">
              Check for accessibility issues
            </a>
          </li>
        </ul>
      </span>
      <span class="pull-right">
        <a href="email_inbox.html" class="btn btn-white btn-sm">
          <i class="fa fa-times f-s-14 m-r-3 m-r-xs-0 t-plus-1" /> <span class="hidden-xs">
            Discard
          </span>
        </a>
      </span>
    </div>
    <!-- end wrapper -->
    <!-- begin vertical-box-row -->
    <div class="vertical-box-row bg-white">
      <!-- begin vertical-box-cell -->
      <div class="vertical-box-cell">
        <!-- begin vertical-box-inner-cell -->
        <div class="vertical-box-inner-cell">
          <!-- begin scrollbar -->
          <div data-scrollbar="true" data-height="100%" class="p-15">
            <!-- begin email form -->
            <form name="email_to_form">
              <!-- begin email to -->
              <div class="form-group email-subject ">
                <input
                  id="compose-to"
                  v-model.trim="toEmail"
                  type="email"
                  class="form-control form-control-lg"
                  placeholder="To"
                  required
                >
              </div>
         
											
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
            
              <div class="email-content p-t-15">
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
                  {{ editor.content }}
                  <editor-content
                    id="compose-message"
                   
                    class="editor border border-black mt-8 p-8 "
                    placeholder="Message"
                    rows="10"
                    required
                    :editor="editor"
                  />
                </div>
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
    <!-- end vertical-box-row -->
    <!-- begin wrapper -->
    
    <!-- end wrapper -->
  </div>
  <!-- end vertical-box -->
  </div>
  <!-- end vertical-box-column -->
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
        content: 'asdfasdf'
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

      this.textEmail = this.editor.getHTML()

      const params = {
        userId: 'me',
        to: this.toEmail,
        subject: this.subjectEmail,
        message: `${this.textEmail}`,
        callback: this.composeTidy
      }
      new GMail().send(params)
    }
  }
}
</script>



<style lang="scss" scoped>
.is-active {
  background-color: #c5ced4;
}
.editor {
  font-family: 'Open Sans';
  font-size: 15px;
  min-height: 350px;
}
</style>
