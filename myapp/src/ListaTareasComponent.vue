<template id="">
    <ul class="listado-app">
        <template v-for="(tarea, indice) in tareas">
            <li class="item-app" v-bind:class="{terminada: tarea.terminada}">
                {{ tarea.texto }}
            </li>
            <!-- Lo que hay en el evento click es como un toggle. Va a ir cambiando el valor de true a false y viceversa-->
            <!-- <button class="btn-ok" @click="tarea.terminada = !tarea.terminada">OK</button> -->
            <button class="btn-ok" @click="estadoTarea(indice)">OK</button>
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
                // Para los ejercicios anteriores de cuando teníamos un array estático
                this.tareas.splice(indice, 1);

                // Para borrarla de la base de datos de firebase
                let id = this.tareas[indice].id;
                this.$http.delete('tareas/' + id + '.json').then(respuesta => {
                    console.log(respuesta);
                })
            },
            estadoTarea(indice) {
                // Cambiar el estado de la tarea cuando alguien haga click y se guardará el estado final
                let terminada = this.tareas[indice].terminada = !this.tareas[indice].terminada;
                let id = this.tareas[indice].id;

                // Patch nos va a ayudar a hacer un cambio en firebase en alguno de los elementos
                // Si nos metemos en el firebase en uno de los elementos objeto, es decir click en el ID con número raro, veremos ahora en la parte
                // superior una ruta. Esa ruta es la que tenemos que poner en el PATCH y siempre terminando con '.json'.
                // El segundo argumento será las variables a cambiar en ese ID
                this.$http.patch('tareas/' + id + '.json', {
                    terminada: terminada
                }).then(respuesta => {
                    console.log(respuesta);
                })
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
