<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import AppNavbar from '@/common/layout/AppNavbar';
  import AppSidenav from '@/common/layout/AppSidenav';
  import AppFooter from '@/common/layout/AppFooter';
  import { mapState } from 'vuex'
export default {
  name: 'app',
  components: {
    AppNavbar,
    AppSidenav,
    AppFooter
  },
  computed: {
    ...mapState(['main', 'auth', 'sidenav'])
  }
}
</script>

<style>

</style>
