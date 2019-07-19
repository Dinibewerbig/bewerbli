<template>
  <div id="content" class="content h-full content-full-width inbox">
    <!-- begin vertical-box -->
    <div class="vertical-box with-grid">
      <!-- begin vertical-box-column -->
      <div class="vertical-box-column width-200 bg-silver hidden-xs">
        <!-- begin vertical-box -->
        <div class="vertical-box">
          <!-- begin wrapper -->
          <div class="wrapper bg-silver text-center">
            <nuxt-link to="/dashboard/email/compose" class="btn btn-inverse p-l-40 p-r-40 btn-sm">
              Compose
            </nuxt-link>
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
                  <div class="wrapper p-0">
                    <div class="nav-title">
                      <b>FOLDERS</b>
                    </div>
                    <ul class="nav nav-inbox">
                      <li class="active">
                        <a href="email_inbox.html">
                          <i class="fa fa-inbox fa-fw m-r-5" /> Inbox <span class="badge pull-right">
                            52
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="email_inbox.html">
                          <i class="fa fa-flag fa-fw m-r-5" /> Important
                        </a>
                      </li>
                      <li>
                        <a href="email_inbox.html">
                          <i class="fa fa-envelope fa-fw m-r-5" /> Sent
                        </a>
                      </li>
                      <li>
                        <a href="email_inbox.html">
                          <i class="fa fa-pencil-alt fa-fw m-r-5" /> Drafts
                        </a>
                      </li>
                      <li>
                        <a href="email_inbox.html">
                          <i class="fa fa-trash fa-fw m-r-5" /> Trash
                        </a>
                      </li>
                    </ul>
                    <div class="nav-title">
                      <b>LABEL</b>
                    </div>
                    <ul class="nav nav-inbox">
                      <li>
                        <a href="javascript:;">
                          <i class="fa fa-fw f-s-10 m-r-5 fa-circle text-inverse" /> Admin
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <i class="fa fa-fw f-s-10 m-r-5 fa-circle text-primary" /> Designer & Employer
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <i class="fa fa-fw f-s-10 m-r-5 fa-circle text-success" /> Staff
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <i class="fa fa-fw f-s-10 m-r-5 fa-circle text-warning" /> Sponsorer
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <i class="fa fa-fw f-s-10 m-r-5 fa-circle text-danger" /> Client
                        </a>
                      </li>
                    </ul>
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
        </div>
        <!-- end vertical-box -->
      </div>
      <!-- end vertical-box-column -->
      <!-- begin vertical-box-column -->
      <div class="vertical-box-column bg-white">
        <!-- begin vertical-box -->
        <div class="vertical-box">
          <!-- begin wrapper -->
          
          <!-- begin vertical-box-row -->
          <nuxt-child />
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
      </div>
      <!-- end vertical-box-column -->
    </div>
    <!-- end vertical-box -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  methods: {},
  computed: {
    ...mapGetters({
      isAuth: 'isAuth'
    })
  }
}
</script>
