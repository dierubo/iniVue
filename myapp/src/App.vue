<template>
    <div id="app" class="app-tareas">
        <div class="content-app">
            <!-- Esta es la forma de pasar un parámetro del script al componente titulo -->
            <titulo v-bind:titulo="titulo" :tareasPendientes="numTareas"></titulo>
            {{ numTareas }}
            <!-- HTML para diferencial el camelCase se pone con guión. Por eso no se pone NuevaTarea sino nueva-tarea -->
            <!-- Con el evento on se puede escuchar a eventos emitidos por componentes hijos para recibir parámetros. En el momento que se reciba llamará a una función.
                En este caso incrementará el número de numTareas dependiendo del valor que tenga el evento emitido (incrementarContador) por el componente hijo, que será igual a 1 -->
            <nueva-tarea :tareas="tareas" v-on:incrementarContador="numTareas += $event" :actualizarContador="actualizarContador"></nueva-tarea>
            <lista-tareas :tareas="tareas"></lista-tareas>
        </div>
    </div>
</template>

<script>
    // Se le puede poner el nombre que queramos al import porque en cada export del componente no ponemos ningún nombre, solamente default
    import Titulo from './TituloComponent.vue';
    import NuevaTarea from './NuevaTareaComponent.vue';
    import ListaTareas from './ListaTareasComponent.vue';
    export default {
        // Esta es la forma de importar los componentes
        components: {
            Titulo,
            NuevaTarea,
            ListaTareas,
        },
        data() {
            return {
                titulo: "Listado deee tareas",
                // Esta propiedad tendra que incrementarse cuando se añada una nueva tarea. Por lo tanto, vendrá un parámetro de un componente hijo.
                // Sino también se pasará la función al hijo para que incremente la variable
                numTareas: 3,
                tareas: [
                    {
                        texto: 'Aprender nuevo framework',
                        terminada: false,
                    },
                    {
                        texto: 'Aprender nuevos viajes',
                        terminada: false,
                    },
                    {
                        texto: 'Aprender nuevas cocinas',
                        terminada: false,
                    },
                ],
            }
        },
        methods: {
            actualizarContador() {
                this.numTareas++;
            }
        },
        created() {
            // La llamada a la dirección de la base de datos se hace a través de una variable global declarada como root. La barra diagonal, 'slash' la pone sola
            this.$http.get('tareas.json')
                        .then(respuesta => {
                            // Se usa el método '.json' para pasar la respuesta a un objeto de tipo JSON
                            //console.log(respuesta.json());
                            return respuesta.json();
                        })
                        // Aquí se recibe la respuesta anterior que es 'respuesta.json' pero a la variable pasada por argumneto se le pasa el nombre que queramos
                        .then(respuestaJson => {
                            console.log(respuestaJson);

                            for (let id in respuestaJson) {
                                let tarea = {
                                    id: id,
                                    texto: respuestaJson[id].texto,
                                    terminada: respuestaJson[id].terminada,
                                }
                                this.tareas.push(tarea);
                            }
                        })
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
