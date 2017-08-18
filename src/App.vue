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
  import Auth from '@/components/admin/auth/mixins/auth';
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
  },
  mixins: [ Auth ],
  created () {
      if (this.$storage.existUser()) {
        this.$store.state.auth = true;
        this.$router.push('/');
      } else {
        this.logout();
      }
  },
  watch: {
    '$route' (to, from) {
      if (!this.$storage.existUser()) {
        console.log('aaaaaaaaaaaaaaaaaaa')
        this.logout();
      } 
    }
    }
}
</script>

<style>

</style>
