<template>
    <div class="container">
        <div class="main">
            <mostrar-formulario>
                <!-- Esto sustituirá a la etiqueta slot que hay en MostrarFormulario -->

                <!-- <div slot="titulo">
                    <h3>Cambiar contraseña</h3>
                </div>

                <div slot="elementos">
                    <div class="email-container">
                        <label for="">Email</label>
                        <input type="email" name="email" value="Email" />
                    </div>
                    <div class="pass-container">
                        <label for="">Password</label>
                        <input type="password" name="password" value="Password" />
                    </div>
                </div>

                <div slot="boton">
                    <button type="submit">Enviar</button>
                </div> -->

                <!-- Otra forma -->
                <!-- Lo que se hace aquí es cargar o llamar a unos componentes, que anteriormente se han importado, a través de una propiedad definida en DATA-->
                <!-- iniciarSesion o cambiarClave hacen referencia al alias de los componentes que se han definido en el export -->
                <button @click="componenteSeleccionado = 'iniciarSesion'">IniciarSesion</button>
                <button @click="componenteSeleccionado = 'cambiarClave'">Cambiar contraseña</button>
                <!-- Para guardar la información cuando se pasa de un componente a otro se hace mediante la etiqueta keep-alive -->
                <keep-alive>
                    <component v-bind:is="componenteSeleccionado"></component>
                </keep-alive>
            </mostrar-formulario>
        </div>
    </div>
</template>

<script>

import MostrarFormulario from './MostrarFormularioComponent.vue';
import CambiarClave from './CambiarClave.vue';
import IniciarSesion from './IniciarSesion.vue';

export default {
    components: {
        mostrarFormulario: MostrarFormulario,
        cambiarClave: CambiarClave,
        iniciarSesion: IniciarSesion,
    },
    data() {
        return {
            componenteSeleccionado: 'iniciarSesion'
        }
    }
}

</script>

<style lang="scss">

</style>
