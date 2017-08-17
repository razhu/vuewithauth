<template>
  <div class="v-toaster">
    <transition-group name="v-toast">
      <div class="v-toast" :class="{[t.theme]: t.theme}" v-for="t in items" :key="t.key">
        <v-layout row wrap>
          <v-flex sm12 class="message-header">
            <v-icon dark>{{ t.icon }}</v-icon>
            <strong>{{ t.title }}</strong>
            <v-btn icon dark @click.native="remove(t)">
              <v-icon>close</v-icon>
            </v-btn>
          </v-flex>
          <v-flex sm12 class="message-body">{{t.message}}</v-flex>
        </v-layout>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    timeout: {
      type: Number,
      default: 10000
    }
  },
  methods: {
    success (message, title, option = {}) {
      this.add(message || 'La operación se realizó correctamente.', title || 'Correcto', 'check', {theme: 'success', timeout: option.timeout});
    },
    info (message, title, option = {}) {
      this.add(message || 'Revise la documentación.', title || 'Información', 'info', {theme: 'info', timeout: option.timeout});
    },
    warning (message, title, option = {}) {
      this.add(message || 'Ocurrió algo inesperado al procesar su operación.', title || 'Advertencia', 'warning', {theme: 'warning', timeout: option.timeout});
    },
    error (message, title, option = {}) {
      this.add(message || 'Ocurrió un error al procesar su operación.', title || 'Error', 'error', {theme: 'error', timeout: option.timeout});
    },
    add (message, title, icon, {theme, timeout}) {
      if (!this.$parent) {
        this.$mount();
        document.body.appendChild(this.$el);
      }
      let item = {message, title, icon, theme, key: `${Date.now()}-${Math.random()}`};
      this.items.push(item);
      setTimeout(() => this.remove(item), timeout || this.timeout);
    },
    remove (item) {
      let i = this.items.indexOf(item);
      if (i >= 0) {
        this.items.splice(i, 1);
      }
    }
  },
  data () {
    return {
      items: []
    };
  }
};
</script>

<style lang="scss">
.v-toaster {
  position: fixed;
  top: 75px;
  right: 0;
  z-index: 10000;
  width: 320px;
  padding-left: 10px;
  padding-right: 10px;

  .v-toast {
    margin-bottom: 10px;
    transition: all 0.3s ease;
    border-radius: 3px;
    color: #fff;
    display: block;
    padding: 1rem;
    background: rgba(69,77,93,0.9);
    border-color: #454d5d;

    .message-header {
      position: relative;

      strong {
        font-weight: 600;
      }

      .btn {
        position: absolute;
        top: -10px;
        right: -7px;
        margin: 0;
      }
    }
  }

  .v-toast.v-toast-enter,
  .v-toast.v-toast-leave-to {
    -webkit-transform: translate(100%);
    transform: translate(100%);
  }
}

@media (max-width: 300px) {
  .v-toaster {
    width: 100%;
  }
}
</style>
