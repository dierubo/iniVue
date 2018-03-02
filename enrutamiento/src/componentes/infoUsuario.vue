<template>
    <div>
        <h3>Información del usuario</h3>
        <div>
            <p><strong>Nombre: </strong>{{ nombre }}</p>
            <p><strong>Email: </strong>{{ email }}</p>
        </div>
        <button class="btn btn-primary" @click="volver">Volver</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                nombre: '',
                email: ''
            }
        },
        methods: {
            volver() {
                // Queremos hacer un push sobre la pila que tenemos en nuestra aplicación web y le decimos adonde queremos ir
                // this.$router.push('/usuarios');
                this.$router.push({name: 'usuarios'}); // Si queremos hacer referencia al nombre que le hemos puesto a la ruta en 'rutas.js' pasando un objeto
            }
        },
        // Es una función que mira si algo cambia. Este watch lo estaba usando cuando /usuarios/:id era una subruta de /usuarios
        watch: {
            $route() {
                let id = this.$route.params.id;
                this.$http.get('https://jsonplaceholder.typicode.com/users/' + id)
                    .then(respuesta => {
                        return respuesta.json();
                    }).then(usuarios => {
                        this.nombre = usuarios.name;
                        this.email = usuarios.email;
                    });
            }
        },
        created() {
            let id = this.$route.params.id;
            this.$http.get('https://jsonplaceholder.typicode.com/users/' + id)
                    .then(respuesta => {
                        return respuesta.json();
                    }).then(usuarios => {
                        this.nombre = usuarios.name;
                        this.email = usuarios.email;
                    });
        }
    }
</script>

