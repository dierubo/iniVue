<template>
  <div class="container">
    <div class="jumbotron">
      <!-- <span v-decorar:grande.italic.negrita="'helvetica'">Esto es vue</span> -->
      <!-- Ahora se pasará un objeto -->
      <span v-decorar:grande.italic.negrita="{familia: 'helvetica', color: 'red'}">Esto es view directiva globales</span>
      <hr>
      <span v-decorar-local:pequeno.italic.negrita="{familia: 'Arial', color: 'blue'}">Esto es view directiva local</span>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    'decorar-local': {
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
    }
  }
}
</script>

<style lang="scss">

</style>
