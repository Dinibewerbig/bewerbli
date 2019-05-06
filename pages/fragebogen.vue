<template>
  <div class="container mx-auto  py-20 ">
    <div class="w-full flex flex-row">
      <div class="flex-col w-1/5 ">
        <div class="w-full text-white p-4 block  bg-indigo-dark rounded-lg  select-none  shadow-sm mb-2 mx-2   no-underline"> 
          Anmeldung 
        </div>
        <div class="w-full  p-4 block   rounded-lg  select-none  shadow-sm mb-2 mx-2   no-underline"> 
          Allgemeine Informationen 
        </div>
        <div class="w-full p-4 block rounded-lg  select-none  shadow-sm mb-2 mx-2  no-underline"> 
          Zu deinen Schnupperlehrstellen 
        </div>
        <div class="w-full p-4 block rounded-lg  select-none shadow-sm mb-2 mx-2  no-underline"> 
          Zu deinen Schnupperlehrstellen 
        </div>
      </div>
      <div class="w-5/6 pl-12">
        <nuxt-child />
      </div>
    </div>
  </div>
 
   
   
  </div>
</template>

<script>
export default {
  layout: 'empty'
}
</script>
