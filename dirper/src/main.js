import Vue from 'vue'
import App from './App.vue'

// Para hacer DIRECTIVAS PERSONALIZADAS GLOBALES. Primer argumento el nombre de la directiva y el segundo es el fallback de la llamada
Vue.directive('decorar', {
    // El argumento 'el' es el elemento que tiene la directiva. El argumento binding es el enlace de datos junto con los argumentos que se pasan a la directiva
    // desde el HTML
    bind(el, binding, vnode) {
      //el.style.fontFamily = binding.value; // Esto es el valor que estamos enviando desde el HTML cuando es solamente un valor y no un objeto

      el.style.fontFamily = binding.value.familia;
      el.style.color = binding.value.color;


      if (binding.arg == 'grande') {
        el.style.fontSize = '30px';
      }

      if (binding.arg == 'pequeno') {
        el.style.fontSize = '10px';
      }

      if (binding.modifiers['negrita']) {
        el.style.fontWeight = 'bold';
      }

      if (binding.modifiers['italic']) {
        el.style.fontStyle = 'italic';
      }
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
