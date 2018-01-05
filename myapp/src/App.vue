<template>
    <div id="app" class="app-tareas">
        <div class="content-app">
            <!-- Esta es la forma de pasar un parámetro del script al componente titulo -->
            <titulo v-bind:titulo="titulo"></titulo>
        </div>
    </div>
</template>

<script>
    import Titulo from './TituloComponent.vue'
    export default {
        // Esta es la forma de importar los componentes
        components: {
            Titulo
        },
        data() {
            return {
                titulo: "Listado deee tareas",
            }
        }
    }
</script>

<style lang="scss">

    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: Arial, sans-serif;
    }

    ul {
        list-style: none;
    }

    .app-tareas {
        width: 800px;
        margin: 0 auto;
        background-color: #A4A4A4;
    }

    .content-app {
        width: 700px;
        margin: 0 auto;
    }
</style>
