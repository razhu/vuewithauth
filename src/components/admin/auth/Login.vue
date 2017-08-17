<template>
  <section>
    <v-card class="login-form">
      <form @submit.prevent="submit">
        <v-card-title primary-title>
          <h4>{{$t('login.title') }}</h4>
          <v-container fluid>
            <v-layout row wrap>
              <v-flex xs12>
                <v-text-field
                  name="username"
                  :label="$t('login.user')"
                  id="username"
                  append-icon="person"
                  v-model="form.username"
                  autofocus
                  maxlength="25"
                  :error="$v.form.username.$error"
                  @input="$v.form.username.$touch()"
                  :error-messages="errors.username"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  name="password"
                  :label="$t('login.password')"
                  id="password"
                  append-icon="lock"
                  :append-icon="getIcon"
                  :append-icon-cb="changeIcon"
                  :type="hidePass ? 'password' : 'text'"
                  v-model="form.password"
                  maxlength="100"
                  :error="$v.form.password.$error"
                  @input="$v.form.password.$touch()"
                  :error-messages="errors.password"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-title>
        <v-card-actions>
          <v-btn primary block large type="submit">{{$t('login.login') }}</v-btn>
        </v-card-actions>
        <v-card-title>
          <v-container fluid>
            <v-layout row class="login-options">
              <v-flex xs5>
                <v-checkbox :label="$t('login.rememberMe')" v-model="remember" color="primary"></v-checkbox>
              </v-flex>
              <v-flex xs7>
                <div class="text-xs-right">
                  <a href=""><v-icon>lock_outline</v-icon> {{$t('login.forgotPass') }}</a>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-title>
        <v-card-title class="info">
          <a href="">{{$t('login.signUp') }}</a>
        </v-card-title>
      </form>
    </v-card>
    <div class="login-lang">
      <app-lang></app-lang>
    </div>
  </section>
</template>

<script>

import { required } from 'vuelidate/lib/validators';
import Auth from './mixins/auth';
import AppLang from '@/common/layout/AppLang';
import errorsHandler from '@/common/mixins/errorsHandler';

export default {
  mixins: [ Auth, errorsHandler ],
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      hidePass: true,
      remember: false,
      errors: {
        username: [],
        password: []
      }
    };
  },
  methods: {
    changeIcon () {
      if (this.form.password.length) {
        this.hidePass = !this.hidePass;
      }
    },
    submit () {
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        this.login(this.form);
      }
    }
  },
  components: { AppLang },
  validations: {
    form: {
      username: {
        required
      },
      password: {
        required
      }
    }
  },
  computed: {
    getIcon () {
      return this.form.password.length === 0 ? 'lock' : this.hidePass ? 'visibility' : 'visibility_off';
    }
  },
  watch: {
    'form.password': function (val) {
      if (val.length === 0) {
        this.hidePass = true;
      }
    },
    '$v.form.username.$error': function (val) {
      this.errorHandler(this.$v.form.username, this.errors.username);
    },
    '$v.form.password.$error': function (val) {
      this.errorHandler(this.$v.form.password, this.errors.password);
    }
  }
};
</script>

<style src="./login.scss" lang="scss"></style>
