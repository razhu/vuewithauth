<template>
  <div>
    <h1>This is the home page</h1>
    <button type="logout" @click="logout()">Logout</button>
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
