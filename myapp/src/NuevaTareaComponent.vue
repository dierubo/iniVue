<template id="">
    <div><input type="text" placeholder="Escribe una nueva tarea" v-model="nuevaTarea" @keyup.enter="agregarTarea()" class="input-app"/>
    <button @click="agregarTarea" class="btn-app">Agregar</button></div>
</template>

<script>

    import { bus } from './main.js';

    export default {
        data() {
            return {
                nuevaTarea: ''
            }
        },
        // Se recoge las variables enviadas a través de App.vue.
        // Podemos crear objeto cuando queramos hacer validaciones sobre las propiedad.
        props: ['tareas', 'actualizarContador'],
        methods: {
            agregarTarea() {
                var texto = this.nuevaTarea.trim(); // La función trim(), propia de javascript, borra cualquier espacio que haya tanto al final como al principio del string.
                if (texto.length > 1) {
                    this.tareas.push({
                        texto: texto,
                        terminada: false
                    });

                    /////////////////// PRIMERA FORMA DE ENVIAR DATOS AL PADRE ////////////////////////

                    // Lo que hace es emitir un evento con su nombre y valor (aunque tampoco es necesario). Se le puede dar el nombre que se quiera
                    //this.$emit('incrementarContador', 1);

                    /////////////////// SEGUNDA FORMA DE ENVIAR DATOS AL PADRE ////////////////////////

                    // Otra forma de comunicar variables con el padre. Se recoge la variable que en este caso es una función enviada desde el padre y
                    // parece que podemos actualizar una de las variables del padre.
                    // Si la variable actualizada se pasa por parámetro a otro componente, la variable en el otro componente también se actualizará
                    //this.actualizarContador();

                    /////////////////// TERCERA FORMA DE ENVIAR DATOS AL PADRE ////////////////////////

                    // Para cuando la aplicación es demasiado grande se crea un 'bus de datos' y hay que definir el nombre del método y su valor
                    //bus.$emit('actualizarContador', this.tareas.length);

                    /////////////////// CUARTA FORMA DE ENVIAR DATOS AL PADRE ////////////////////////

                    // Aquí la función ya está definida dentro del 'bus de datos' en el main.js y es común a todos
                    bus.actualizarContador(this.tareas.length);
                }

                this.nuevaTarea = "";
            },
        },
        created() {
            // Pasaremos la información de las tareas ya creadas al 'bus de datos' cuando se cree el componente. En TituloComponent estará escuchando para ver
            // si existe valores
            //bus.$emit('actualizarContador', this.tareas.length);

            //////// OTRA FORMA ///////
            bus.actualizarContador(this.tareas.length);
        }
    }
</script>
