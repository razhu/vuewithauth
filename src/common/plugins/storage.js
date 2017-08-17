'use strict';

export default {
  install: (Vue, config = { appName: 'app' }) => {
    const appName = config.appName;

    const Storage = {
      setUser (user) {
        this.set('user', user);
      },

      getUser () {
        return this.get('user');
      },

      existUser () {
        return this.exist('user');
      },

      removeUser () {
        this.remove('user');
      },

      // LocalStorage
      set (key, value) {
        localStorage.setItem(appName + '_' + key, JSON.stringify(value));
      },

      get (key) {
        let data = localStorage.getItem(appName + '_' + key);
        try {
          return JSON.parse(data);
        } catch (Exception) {
          return data;
        }
      },

      remove (key) {
        localStorage.removeItem(appName + '_' + key);
      },

      destroy (key) {
        this.remove(key);
      },

      exist (key) {
        var value = localStorage.getItem(appName + '_' + key);
        return typeof value !== undefined && value !== undefined && value !== null && value !== 'null' && value !== '[]';
      },

      // SessionStorage
      setSession (key, value) {
        sessionStorage.setItem(appName + '_' + key, JSON.stringify(value));
      },

      getSession (key) {
        return JSON.parse(sessionStorage.getItem(appName + '_' + key));
      },

      removeSession (key) {
        sessionStorage.removeItem(appName + '_' + key);
      },

      existSession (key) {
        var value = sessionStorage.getItem(appName + '_' + key);
        return typeof value !== undefined && value !== undefined && value !== null && value !== 'null' && value !== '[]';
      },

      // Flash Data
      getFlash (key) {
        if (this.exist(key)) {
          var value = this.get(key);
          this.remove(key);
          return value;
        }
        return false;
      },

      flash (key) {
        this.getFlash(key);
      },

      removeAll () {
        localStorage.clear();
      }

    };

    Vue.prototype.$storage = Storage;
  }
};
