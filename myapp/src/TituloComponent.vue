<template id="">
    <div class='titulo-app'>{{ titulo }}</div>
</template>

<script>
    export default {
        props: ['titulo'],
        // Data() (ES6) es lo mismo que data: function(){}
        // data() {
        //     return {
        //         titulo: "Listado tareas",
        //     }
        // }
    }
</script>
