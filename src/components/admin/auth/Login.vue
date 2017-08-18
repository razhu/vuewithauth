<template>
<div>
<input type="" v-model="form.username" name="" value="">
<input type="" v-model="form.password" name="" value="">
<button type="submit" @click="submit">Login</button>
</div>

</template>

<script>

import Auth from './mixins/auth';


export default {
  mixins: [ Auth ],
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
    submit () {
      this.login(this.form);
    }
  },
  computed: {
  },
  watch: {
  }
};
</script>

