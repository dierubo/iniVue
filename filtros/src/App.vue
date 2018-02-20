<template>
  <div class="container">
    <div class="jumbotron">
      <!-- De esta forma creamos un filtro. A partir de la barra en adelante son filtros y esos filtros van a afectar a la variable que está antes de la barra
      que en este caso es mensaje. El filtro suspensivos está declarado como filtro global en main.js 
      El filtro suspensivo recibirá lo que le venga por la izda, que en este caso será el mensaje, pero en mayúsculas. -->
      <span>{{ mensaje | mayusculas | suspensivos}}</span><br/>
      <span>{{ temperatura | aFahrenheit }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      mensaje: 'Welcome to Your Vue.js App',
      temperatura: 30,
    }
  },
  filters: {
    // Vue sabe que a la hora de crear los propios filtros recibes la variable que está a la izda de la barra. En este caso, es mensaje, pero se puede poner otro
    // nombre cualquier al argumento recibido en la función, ya que el valor de la variable mensaje nunca va a cambiar. Se podía haber llamado msg o arg o lo que sea
    // El valor que tendrá será el de la variable mensaje que está en data()
    mayusculas(msg) {
      return msg.toUpperCase();
    },
    aFahrenheit(celsius) {
      return (9/5 * celsius) + 32 + 'F';
    }
  }
}
</script>

<style>

</style>
