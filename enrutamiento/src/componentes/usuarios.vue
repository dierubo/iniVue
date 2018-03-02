<template>
    <div>
        <p>Lista de Usuarios</p>
        <ul class="list-gropup">
            <!-- <span>ID: {{ id }}</span> -->
            <!-- Con la propiedad :to (v-bind:to) se ofrece información dinámica a la subruta que hemos nombrado con 'name' y le pasamos el/los
            parámetros que necesita, que en este caso será el id del usuario. Qué ese id se encuentra en nuestro objeto usuario sacado del 
            bucle FOR -->
            <router-link tag="li" :to="{name: 'infoUsuario', params: {id: usuario.id}}" v-for="usuario in usuarios" class="list-group-item">
                {{ usuario.name }}
            </router-link>
            <!-- Versión antigua --> 
            <!-- <li v-for="usuario in usuarios" class="list-group-item">
                {{ usuario.name }}
            </li> -->
        </ul>
        <!-- Este router view es para las subrutas de usuario cuando llega por la URL '/usuarios/5'. La subruta está declarado en 'rutas.js' -->
        <router-view></router-view>
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

