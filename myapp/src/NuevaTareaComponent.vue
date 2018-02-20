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

                    // Hacemos una llamada HTTP con el servicio 'Vue-resources' que hemos importado en main.js. 
                    // El primer argumento es la dirección web que no da firebase de nuestra base de datos y la parte de 'tareas.json' es un nombre
                    // cualquiera que hemos dado en este fichero. Se podría haber llamado de cualquier forma, pero tiene que acabar con .json. El segundo
                    // argumento es la variable que vamos a pasar para que la guarde en la base de datos.
                    // Se hace la llamada a la dirección declarada en el 'main.js' . La barra diagonal la pone sola
                    this.$http.post('tareas.json', {
                        texto: texto,
                        terminada: false
                    })
                    // Como la llamada HTTP es una promesa(asíncrono) , queremos que cuando termine haga lo que sea.
                    .then(respuesta => console.log(respuesta));
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
