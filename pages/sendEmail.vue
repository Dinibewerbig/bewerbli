<template>
  <div class="mt-32">
    <div @click="sendEmail()">
      send
    </div>
  </div>
</template>
<script>
const smtp = require('~/services/smtp.js')
export default {
  name: 'Empty',
  data() {
    return {
      component: null
    }
  },
  methods: {
    sendEmail() {
      console.log('sending email')
      smtp.Email.send({
        Host: 'smtp.elasticemail.com',
        Username: 'thommymarti@gmail.com',
        Password: '46c49e5f-7c55-40e1-bba1-7ce333712f55',
        To: 'mrmartididac@gmail.com',
        From: 'mrmartididac@gmail.com',
        Subject: 'This is the subject',
        Body: 'And this is the body',
        Attachments: [
          {
            name: 'smtpjs.png',
            path:
              'https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png'
          }
        ]
      }).then(message => alert(message))
    }
  }
}
</script>
