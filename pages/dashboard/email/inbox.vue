<template>
  <!-- begin vertical-box-column -->

  <!-- begin vertical-box -->
  <div class="vertical-box">
    <!-- begin wrapper -->
    <div class="wrapper bg-silver-lighter">
      <!-- begin btn-toolbar -->
      <div class="btn-toolbar">
        <div class="btn-group m-r-5">
          <a href="javascript:;" class="p-t-5 pull-left m-r-3 m-t-2" data-click="email-select-all">
            <i class="far fa-square fa-fw text-muted f-s-16 l-minus-2" />
          </a>
        </div>
        <!-- begin btn-group -->
        <div class="btn-group dropdown m-r-5">
          <button class="btn btn-white btn-sm" data-toggle="dropdown">
            View All <span class="caret m-l-3" />
          </button>
          <ul class="dropdown-menu text-left text-sm">
            <li class="active">
              <a href="javascript:;">
                <i class="fa fa-circle f-s-10 fa-fw m-r-5" /> All
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <i class="fa fa-circle f-s-10 fa-fw m-r-5" /> Unread
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <i class="fa fa-circle f-s-10 fa-fw m-r-5" /> Contacts
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <i class="fa fa-circle f-s-10 fa-fw m-r-5" /> Groups
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <i class="fa fa-circle f-s-10 fa-fw m-r-5" /> Newsletters
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <i class="fa fa-circle f-s-10 fa-fw m-r-5" /> Social updates
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <i class="fa fa-circle f-s-10 fa-fw m-r-5" /> Everything else
              </a>
            </li>
          </ul>
        </div>
        <!-- end btn-group -->
        <!-- begin btn-group -->
        <div class="btn-group m-r-5">
          <button class="btn btn-sm btn-white">
            <i class="fa fa-redo f-s-14 t-plus-1" />
          </button>
        </div>
        <!-- end btn-group -->
        <!-- begin btn-group -->
        <div class="btn-group">
          <button class="btn btn-sm btn-white hide" data-email-action="delete">
            <i class="fa t-plus-1 fa-times f-s-14 m-r-3" /> <span class="hidden-xs">
              Delete
            </span>
          </button>
          <button class="btn btn-sm btn-white hide" data-email-action="archive">
            <i class="fa t-plus-1 fa-folder f-s-14 m-r-3" /> <span class="hidden-xs">
              Archive
            </span>
          </button>
          <button class="btn btn-sm btn-white hide" data-email-action="archive">
            <font-awesome-icon
              class="f-s-14 m-r-3 t-plus-1"
              :icon="['fa', 'trash']"
            />
            <span class="hidden-xs">
              Junk
            </span>
          </button>
        </div>
        <!-- end btn-group -->
        <!-- begin btn-group -->
        <div class="btn-group ml-auto">
          <button class="btn btn-white btn-sm">
            <font-awesome-icon
              class="f-s-14 t-plus-1"
              :icon="['fa', 'chevron-left']"
            />
          </button>
          <button class="btn btn-white btn-sm">
            <font-awesome-icon
              class="f-s-14 t-plus-1"
              :icon="['fa', 'chevron-right']"
            />
          </button>
        </div>
        <!-- end btn-group -->
      </div>
      <!-- end btn-toolbar -->
    </div>
    <!-- end wrapper -->
    <!-- begin vertical-box-row -->
    <div class="vertical-box-row">
      <!-- begin vertical-box-cell -->
      <div class="vertical-box-cell">
        <!-- begin vertical-box-inner-cell -->
        <div class="vertical-box-inner-cell">
          <!-- begin scrollbar -->
          <div data-scrollbar="true" data-height="100%">
            <!-- begin list-email -->
            <ul v-for="(message, index) in google.gmail.inbox" :key="index" class="list-group list-group-lg no-radius list-email">
              <li class="list-group-item unread">
                <div class="email-checkbox">
                  <label>
                    <font-awesome-icon
     
                      :icon="['far', 'square']"
                    />
                    <input type="checkbox" data-checked="email-checkbox">
                  </label>
                </div>
                <a href="email_detail.html" class="email-user bg-gradient-blue">
                  <span class="text-white">
                    F
                  </span>
                </a>
                <div class="email-info">
                  <a href="email_detail.html">
                    <span class="email-time">
                      {{ message.date }}
                    </span>
                    <span class="email-sender">
                      {{ message.from }}
                    </span>
                    <span class="email-title">
                      {{ message.subject }}
                    </span>
                    <span class="email-desc">
                      {{ message.body }}
                    </span>
                  </a>
                </div>
              </li>
            </ul>
             
            <!-- end list-email -->
          </div>
          <!-- end scrollbar -->
        </div>
        <!-- end vertical-box-inner-cell -->
      </div>
      <!-- end vertical-box-cell -->
    </div>
    <!-- end vertical-box-row -->
    <!-- begin wrapper -->
    <div class="wrapper bg-silver-lighter clearfix">
      <div class="btn-group pull-right">
        <button class="btn btn-white btn-sm">
          <i class="fa fa-chevron-left f-s-14 t-plus-1" />
        </button>
        <button class="btn btn-white btn-sm">
          <i class="fa fa-chevron-right f-s-14 t-plus-1" />
        </button>
      </div>
      <div class="m-t-5 text-inverse f-w-600">
        1,232 messages
      </div>
    </div>
    <!-- end wrapper -->
  </div>
  <!-- end vertical-box -->

  <!-- end vertical-box-column -->
</template>
  <script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'authenticated',
  layout: 'login',
  data: function() {
    return {
      title: 'Method: Users.messages.list',
      description: "Lists the messages in the user's mailbox.",
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
      if (window.gapi.client.gmail) {
        this.isShow = true
        this.$store.dispatch('receiveGmailMyMessages')
      } else {
        // Load Gmail Api
        this.apiGoogle.loadGmailApi().then(() => {
          if (this.config.debug) {
            console.log('loadGmailApi - OK')
          }
          this.isShow = true
          this.$store.dispatch('receiveGmailMyMessages')
        })
      }
    })
  },
  computed: {
    ...mapGetters({
      config: 'getConfig',
      google: 'getGoogleData'
    })
  }
}
</script>
