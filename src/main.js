import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// create a global filter to limit description length
Vue.filter('snippet', val => {
  if (!val || typeof (val) != 'string') return ''
  val = val.slice(0, 110);
  return val;
});

// create global filter to remove extra periods in taglines
Vue.filter('periods', val => {
  if (!val || typeof (val) != 'string') return ''
  val = val.replace('.', '');
  return val;
})

new Vue({
  render: h => h(App),
}).$mount('#app')
