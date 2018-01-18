<template>
    <div class="container">
        <div class="main">
            <mostrar-formulario>
                <!-- Esto sustituirá a la etiqueta slot que hay en MostrarFormulario -->

                <div slot="titulo">
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
                    <button type="submit">Cambiar contraseña</button>
                </div>
            </mostrar-formulario>
        </div>
    </div>
</template>

<script>

import MostrarFormulario from './MostrarFormularioComponent.vue';

export default {
    components: {
        MostrarFormulario,
    },
    data () {

    }
}

</script>

<style lang="scss">

</style>
