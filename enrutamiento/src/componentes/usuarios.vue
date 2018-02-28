<template>
    <div>
        <p>Lista de Usuarios</p>
        <ul class="list-gropup">
            <span>ID: {{ id }}</span>
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
            id: this.$route.params.id, // Esto simplemente mostrará el id que hay en la URL y que hemos definido en rutas.js como /usuarios/:id
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

