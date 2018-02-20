import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

// Con esto se le dice a Vue que utilice la libreria que acabamos de importar y que la podemos usar dentro de nuestro código para hacer llamadas HTTP
Vue.use(VueResource);

// Variable global que se usará para las llamadas a la base de datos
Vue.http.options.root = 'https://tareas-vue.firebaseio.com';

export var bus = new Vue({
    // Se puede crear funciones dentro del 'bus de datos'
    methods: {
        actualizarContador(numTareas) {
            this.$emit('actualizarContador', numTareas);
        }
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
