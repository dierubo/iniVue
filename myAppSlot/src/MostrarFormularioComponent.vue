<template id="">
    <form action="">
        <!-- Esta etiqueta recibira lo que hay dentro de la etiqueta "mostrar-formulario", que está definida en App.vue, y se sustituirá-->
        <slot name="titulo"></slot>
        <slot name="elementos"></slot>
        <slot name="boton"></slot>
        <!-- Slot por defecto. Si ningún bloque viene con nombre se le asignará el slot por defecto -->
        <slot></slot>
    </form>
</template>
<script type="text/javascript">

</script>
<style scoped>

    h3 {
        color: green;
    }

</style>
