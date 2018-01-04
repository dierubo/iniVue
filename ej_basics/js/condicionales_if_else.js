
var app = new Vue({
    el: '.vue',
    data: {
        mostrar: true,
        wat: false,
        parrafo: 4,
    },
    methods: {
        destruir: function() {
            // Cuando aparezca el símbolo del dolar será algo que nosotros no hemos creado y que es parte Vue.
            // Esto llamará al método destroy propio de Vue. En el momento que se destruya, se destruirá la instancia de Vue y no se podrá volver usar ningún método de Vue
            this.$destroy();
        },
        mostrarMensaje: function() {
            return "Retornando con funciones y " + this.mensaje;
        }
    }
})
