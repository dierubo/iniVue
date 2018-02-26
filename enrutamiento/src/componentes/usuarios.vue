<template>
  <div>
      <p>Lista de Usuarios</p>
      <ul class="list-gropup">
          <li v-for="usuario in usuarios" class="list-group-item">
              {{ usuario.name }}
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
             usuarios: {}
        }
    },
    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/users')
                    .then(respuesta => {
                        return respuesta.json();
                    }).then(usuarios => {
                        this.usuarios = usuarios;
                    });
    }
}
</script>

