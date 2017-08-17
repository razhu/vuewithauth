const AppMessages = require('./AppMessages.vue');

AppMessages.install = (Vue, options) => {
  Vue.prototype.$message = new (Vue.extend(AppMessages))({ propsData: options });
  if (process.env.NODE_ENV === 'development') window.$message = Vue.prototype.$message;
};
module.exports = AppMessages;
