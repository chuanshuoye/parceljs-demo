// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './src/App'
/* eslint-disable no-new */
Vue.component("App",App)
const AppMain=Vue.extend({
 template:"<App/>"
});

const component=new AppMain().$mount()
document.getElementById('app').appendChild(component.$el)