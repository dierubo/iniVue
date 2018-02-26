import Vue from 'vue';
import App from './App.vue';
// Importar el paquete de vue-resource
import VueResource from 'vue-resource';
// Importar el paquete de vue-router
import VueRouter from 'vue-router';
// Como 'rutas' viene del archivos rutas.js a través de un export, hay que importarlo a través de las llaves {}
import { rutas } from './rutas.js';

// De esta lo que hacemos es dar la posibilidad de usar (Vue.use) vue-router dentro del proyecto, ya que
Vue.use(VueRouter);
// Ya podemos usar el paquete resource dentro de nuestro proyecto
Vue.use(VueResource);

// Ahora hay que pasar las rutas al Enrutador
const enrutador = new VueRouter({
  //Con el modo 'history' quitamos el hash (#) de la url. Si queremos más info, sobre todo en PRO, vamos a la página https://router.vuejs.org/en/essentials/history-mode.html
  mode: 'history',
  routes: rutas
});

new Vue({
  el: '#app',
  router: enrutador,
  render: h => h(App)
})
