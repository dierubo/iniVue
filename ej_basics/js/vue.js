
var app = new Vue({
    el: '.vue',
    data: {
        mensaje: 'Conociendo nuevos JS',
        imagen: 'https://vuejs.org/images/logo.png',
        nombre: 'James',
        texto: 'Esto es el Vue',
        texto_html: "<strong>Pruebas html</strong>",
    },
    beforeCreate: function() {
        console.log("Usando la función beforeCreate");
    },
    created: function() {
        console.log("Usando la función created");
    },
    beforeMount: function() {
        console.log("Usando la función beforeMount");
    },
    mounted: function() {
        console.log("Usando la función mounted");
    },
    beforeUpdate: function() {
        console.log("Usando la función beforeUpdate");
    },
    updated: function() {
        console.log("Usando la función Updated");
    },
    beforeDestroy: function() {
        console.log("Usando la función beforeDestroy");
    },
    destroyed: function() {
        console.log("Usando la función destroyed");
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
