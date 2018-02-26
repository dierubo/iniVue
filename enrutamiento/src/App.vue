<template>
    <div class="container">
      <!-- El encabezado será el lugar donde cambiaremos de una página a otra -->
      <encabezado></encabezado>
      <div class="jumbotron">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
  import Encabezado from './componentes/encabezado.vue';
  
  export default {
    components: {
      // El primer encabezado, el que va en minúsculas, es el que hará referencia a la etiqueta HTML, <encabezado>, que hay unas líneas más arriba.
      // Y el que va en mayúsculas, se refiere al que se declara como import
      encabezado: Encabezado,
    }
  }
</script>

<style>

</style>
