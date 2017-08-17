<template>
  <div id="app">
    <app-sidenav></app-sidenav>
    <app-navbar></app-navbar>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppNavbar from '@/common/layout/AppNavbar';
  import AppSidenav from '@/common/layout/AppSidebar';
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
