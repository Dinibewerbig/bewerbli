<template>
  <div class="vertical-box">
    <!-- begin wrapper -->
    <div class="wrapper bg-silver-lighter clearfix">
      <div class="pull-left">
        <div class="btn-group m-r-5">
          <a href="javascript:;" class="btn btn-white btn-sm">
            <i class="fa fa-reply f-s-14 m-r-3 m-r-xs-0 t-plus-1" /> <span class="hidden-xs">
              Reply
            </span>
          </a>
        </div>
        <div class="btn-group m-r-5">
          <a href="javascript:;" class="btn btn-white btn-sm">
            <i class="fa fa-trash f-s-14 m-r-3 m-r-xs-0 t-plus-1" /> <span class="hidden-xs">
              Delete
            </span>
          </a>
          <a href="javascript:;" class="btn btn-white btn-sm">
            <i class="fa fa-archive f-s-14 m-r-3 m-r-xs-0 t-plus-1" /> <span class="hidden-xs">
              Archive
            </span>
          </a>
        </div>
      </div>
      <div class="pull-right">
        <div class="btn-group">
          <a href="email_inbox.html" class="btn btn-white btn-sm disabled">
            <i class="fa fa-arrow-up f-s-14 t-plus-1" />
          </a>
          <a href="email_inbox.html" class="btn btn-white btn-sm">
            <i class="fa fa-arrow-down f-s-14 t-plus-1" />
          </a>
        </div>
        <div class="btn-group m-l-5">
          <a href="email_inbox.html" class="btn btn-white btn-sm">
            <i class="fa fa-times f-s-14 t-plus-1" />
          </a>
        </div>
      </div>
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
            <!-- begin wrapper -->
            <div class="wrapper">
              <h3 class="m-t-0 m-b-15 f-w-500">
                Bootstrap v4.0 is coming soon
              </h3>
              <ul class="media-list underline m-b-15 p-b-15">
                <li class="media media-sm clearfix">
                  <a href="javascript:;" class="pull-left">
                    <img class="media-object rounded-corner" alt="" src="~/assets/user/user-12.jpg">
                  </a>
                  <div class="media-body">
                    <div class="email-from text-inverse f-s-14 f-w-600 m-b-3">
                      from support@wrapbootstrap.com
                    </div>
                    <div class="m-b-3">
                      <i class="fa fa-clock fa-fw" /> Today, 8:30 AM
                    </div>
                    <div class="email-to">
                      To: nguoksiong@live.co.uk
                    </div>
                  </div>
                </li>
              </ul>
              <ul class="attached-document clearfix">
                <li class="fa-file">
                  <div class="document-file">
                    <a href="javascript:;">
                      <i class="fa fa-file-pdf" />
                    </a>
                  </div>
                  <div class="document-name">
                    <a href="javascript:;">
                      flight_ticket.pdf
                    </a>
                  </div>
                </li>
                <li class="fa-camera">
                  <div class="document-file">
                    <a href="javascript:;">
                      <img src="~/assets/gallery/gallery-11.jpg" alt="">
                    </a>
                  </div>
                  <div class="document-name">
                    <a href="javascript:;">
                      front_end_mockup.jpg
                    </a>
                  </div>
                </li>
              </ul>
						
              <p class="f-s-12 text-inverse p-t-10"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel auctor nisi, vel auctor orci. <br>
                Aenean in pretium odio, ut lacinia tellus. Nam sed sem ac enim porttitor vestibulum vitae at erat.
              </p>
              <p class="f-s-12 text-inverse">
                Curabitur auctor non orci a molestie. Nunc non justo quis orci viverra pretium id ut est. <br>
                Nullam vitae dolor id enim consequat fermentum. Ut vel nibh tellus. <br>
                Duis finibus ante et augue fringilla, vitae scelerisque tortor pretium. <br>
                Phasellus quis eros erat. Nam sed justo libero.
              </p>
              <p class="f-s-12 text-inverse">
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.<br> 
                Sed tempus dapibus libero ac commodo.
              </p>
              <br>
              <br>
              <p class="f-s-12 text-inverse">
                Best Regards,<br>
                Sean.<br><br>
                Information Technology Department,<br>
                Senior Front End Designer<br>
              </p>
            </div>
            <!-- end wrapper -->
          </div>
          <!-- end scrollbar -->
        </div>
        <!-- end vertical-box-inner-cell -->
      </div>
      <!-- end vertical-box-cell -->
    </div>
    <!-- end vertical-box-row -->
    <!-- begin wrapper -->
    <div class="wrapper bg-silver-lighter text-right clearfix">
      <div class="btn-group">
        <a href="email_inbox.html" class="btn btn-white btn-sm disabled">
          <i class="fa fa-arrow-up" />
        </a>
        <a href="email_inbox.html" class="btn btn-white btn-sm">
          <i class="fa fa-arrow-down" />
        </a>
      </div>
      <div class="btn-group m-l-5">
        <a href="email_inbox.html" class="btn btn-white btn-sm">
          <i class="fa fa-times" />
        </a>
      </div>
    </div>
    <!-- end wrapper -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'authenticated',
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
      if (this.config.debug) {
        console.log('gmail-display-inbox.mounted - OK')
      }
      // Show my mail message of input
      if (!this.isTesting) {
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
      } else {
        this.isShow = true
        this.$store.dispatch('receiveGmailMyMessages')
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

<style>
iframe {
  width: 100%;
  border: 0;
  min-height: 80%;
  height: 600px;
  display: flex;
}
</style>
