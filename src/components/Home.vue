<template>
  <div>
    <h1>This is the home page</h1>
    <v-btn round primary dark @click="logout()">Logoutsss</v-btn>
  </div>
</template>

<script>
import Auth from '@/components/admin/auth/mixins/auth';
export default {
  mixins: [ Auth ]
  // methods: {
  //   logout () {
  //     console.log('hola')
  //     this.logout();
  //   }
  // },
}
</script>

<style>

</style>
