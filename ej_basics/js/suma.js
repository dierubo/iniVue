var app = new Vue({
    el: '#app',
    data: {
        primero: 0,
        segundo: 0,
        tercero: 0,
        cuarto: 0,
        quinto: 0,
    },
    // Computed son propiedades calculadas
    computed: {
        // se actualiza la propiedad totale cuando alguno de las propiedades de dentro cambia. Véase con el número quinto
        totale: function() {
            return this.primero + this.segundo + this.tercero + this.cuarto;
        }
    }
})
