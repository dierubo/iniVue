import Vue from 'vue'
import App from './App.vue'

// Para crear un filtro de manera global
Vue.filter('suspensivos', function(txt) {
    return txt.substring(0, 10) + '...';
});

new Vue({
  el: '#app',
  render: h => h(App)
})
