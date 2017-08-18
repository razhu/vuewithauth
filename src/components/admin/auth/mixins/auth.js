'use strict';

export default {
  methods: {
    login (data) {
      this.$http.post(this.$authUrl, {
        usuario: data.username,
        password: data.password
      }).then(response => {
        if (response.data) {
          let menu = response.data.menu;
          let usuario = response.data.usuario;
          let token = response.data.token;
          let sidenav = data.sidenav === undefined ? true : data.sidenav;

          this.$storage.setUser(usuario);
          this.$storage.set('menu', menu);
          this.$storage.set('token', token);
          this.$storage.set('sidenav', sidenav);

          this.$store.state.menu = menu;
          this.$store.state.sidenav = sidenav;

          this.$store.state.auth = true;
          if (usuario.idRol === 2) {
            data.redirect = 'tramite';
          }
          this.$router.push(data.redirect || '/');
        }
      }).catch((err) => {
        console.log('errorrrr ', err)
        this.$message.error('Usuario y/o contraseña inválida');
      });
    },

    logout (store, router) {
      store = store || this.$store;
      router = router || this.$router;
      console.log('logout!');

      this.$storage.removeUser();
      this.$storage.remove('menu');
      this.$storage.remove('token');
      this.$storage.remove('sidenav');

      store.commit('setDefault');
      router.push('login');
    }
  }
};
