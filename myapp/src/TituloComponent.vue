<template id="">
    <div>
        <div class='titulo-app'>{{ tituloMayusculas() }}</div>
        <div>Tareas Pendientes {{ tareasPendientes}}</div>
        <div> Tareas Pendientes desde el bus de datos {{ numTareasBusDatos }}</div>
    </div>
</template>

<script>
    // Esta variable bus está definida en main.js y es una forma de transportar los datos entre componentes hijos
    import { bus } from './main.js';

    export default {
        // Podemos crear objeto cuando queramos hacer validaciones sobre las propiedad. En vez un array tal que así props: ['titulo']
        //props: ['titulo'],
        props: {
            titulo: {
                // Definiendo que la variable que se recoge sea de tipo String
                type: String,
                // Esto sirve para cuando en el componente princiapl (App.vue) no se pasa ningún parámetro. Entonces la variable {{titulo}} cogerá el valor de default
                default: 'Tareas',
                // Con esto se dice que la propiedad se tiene que pasar por parámetro sí o sí
                required: true,
            },
            tareasPendientes: {
                type: Number,
                default: 0,
            },
        },
        // Data() (ES6) es lo mismo que data: function(){}
        data() {
            return {
                numTareasBusDatos: 0
            }
        },
        methods: {
            tituloMayusculas() {
                return this.titulo.toUpperCase();
            }
        },
        // Para escuchar el evento desde el principio para ver si existe.
        created() {
            // Para saber si hay eventos con ese nombre en el 'bus de datos'. Se hace con el evento $on
            // Función callback. Que el nombre del evento devuelve una función con un valor. Todo esto viene llamado desde NuevaTareaComponent.
            // Solamente se ejecutará esto cuando se le de al botón de agregarTarea en NuevaTareaComponent. Cuando se cree el componente numTareasBusDatos será igual a 0
            bus.$on('actualizarContador', (numTareasBusDatos) => {
                this.numTareasBusDatos = numTareasBusDatos;
            });
        }
    }
</script>
