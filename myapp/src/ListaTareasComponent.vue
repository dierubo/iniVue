<template id="">
    <ul class="listado-app">
        <template v-for="(tarea, indice) in tareas">
            <li class="item-app" v-bind:class="{terminada: tarea.terminada}">
                {{ tarea.texto }}
            </li>
            <!-- Lo que hay en el evento click es como un toggle. Va a ir cambiando el valor de true a false y viceversa-->
            <button class="btn-ok" @click="tarea.terminada = !tarea.terminada">OK</button>
            <button class="btn-cancel" @click="borrarTarea(indice)">CANCEL</button>
        </template>
    </ul>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        // Se recoge las variables enviadas a través de App.vue
        props: ['tareas'],
        methods: {
            borrarTarea(indice) {
                this.tareas.splice(indice, 1);
            }
        }
    }
</script>

<!-- Con la directiva scoped significa que ese estilo es solamente para el componente -->
<style scoped>

    .terminada {
        color: grey;
        text-decoration: line-through;
    }
</style>

<style>

.item-app {
    width: 550px;
    display: inline-block;
}

.btn-ok {
    width: 50px;
    border: none;
}

.btn-cancel {
    width: 50px;
    border: none;
}
</style>
