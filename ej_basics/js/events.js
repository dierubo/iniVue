var app = new Vue({
    el: '.vue',
    data: {
        contador: 0,
        x: 0,
        y: 0,
        total: 0,
    },
    methods: {
        sumarUno: function() {
            this.contador++;
        },
        restarUno: function() {
            this.contador--;
        },
        alerta: function(mensaje) {
            alert(mensaje);
        },
        // Al estar asignado una función a un evento, Vue enviará los datos del evento y se recibirán com párametro
        mostrarUbicacion: function(event) {
            this.x = event.x;
            this.y = event.y;
            //console.log(event);
        },
        totalSuma: function(cantidad) {
            console.log(cantidad);
            this.total += cantidad;
        }
    }
})
