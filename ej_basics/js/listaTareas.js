var data = {
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
    nuevaTarea: '',
}

Vue.component('titulo', {
    template: "<div class='titulo-app'>{{ titulo }}</div>",
    data: function() {
        return { titulo: 'Lista de tareas con componentes' }
    }
});

Vue.component('nueva-tarea', {
    template: `<div><input type="text" placeholder="Escribe una nueva tarea" v-model="nuevaTarea" @keyup.enter="agregarTarea()" class="input-app"/>
    <button @click="agregarTarea" class="btn-app">Agregar</button></div>`,
    data: function() {
        // Se devuelve data que es la variable definida arriba para que la directiva v-model encuentre la variable nuevaTarea
        return data;
    },
    methods: {
        agregarTarea: function() {
            var texto = this.nuevaTarea.trim(); // La función trim(), propia de javascript, borra cualquier espacio que haya tanto al final como al principio del string.
            if(texto.length > 1) {
                this.tareas.push({
                    texto: texto,
                    terminada: false
                });
            }

            this.nuevaTarea = "";
        },
    }
});

Vue.component('lista-tareas', {
    template: `<ul class="listado-app">
                    <template v-for="(tarea, indice) in tareas">
                        <li class="item-app" v-bind:class="{terminada: tarea.terminada}">
                            {{ tarea.texto }}
                        </li>
                        <!-- Lo que hay en el evento click es como un toggle. Va a ir cambiando el valor de true a false y viceversa-->
                        <button class="btn-ok" @click="tarea.terminada = !tarea.terminada">OK</button>
                        <button class="btn-cancel" @click="borrarTarea(indice)">CANCEL</button>
                    </template>
                </ul>`,
    data: function() {
        return data;
    },
    methods: {
        borrarTarea: function(indice) {
            this.tareas.splice(indice, 1);
        }
    }
})

// Se define una variable para poder visualizar las propiedades en el inspector del navegador. Ej: se puede hacer a la variable nuevaTarea con app.nuevaTarea
var app = new Vue({
    el: '#app',
    data: data,
})
