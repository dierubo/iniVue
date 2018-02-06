<template>
  <div class="container">
    <div class="jumbotron">
      <form class="data-container" action="">
        <div class="form-group">
          <label for="labelNombre">Nombre</label>
          <!-- Con la directiva TRiM delante de v-model hace que quite los blancos de la cadena. Esta directiva viene por defecto en Vue-->
          <input type="text" class="form-control" id="nombre" v-model.trim="usuario.nombre" placeholder="Nombre">
        </div>
        <div class="form-group">
          <label for="labelapellido">Apellido</label>
          <input type="text" class="form-control" id="apellido" placeholder="Apellido">
        </div>
        <div class="form-group">
          <label for="labelEmail">Email</label>
          <!-- Directiva LAZY, propia de VUE, hace el two way data binding cuando ya no está el foco en ese campo. -->
          <input type="email" class="form-control" id="correo" placeholder="Email" v-model.lazy="usuario.correo">
        </div>
        <div class="form-group">
          <!-- La directiva NUMBER, propia de VUE, 'traduce' cualquier dato que haya a number -->
          <label for="labelEmail">Edad</label>
          <input type="text" class="form-control" id="edad" placeholder="Edad" v-model.number="usuario.edad">
        </div>
        <div class="form-group">
          <label for="labelEmail">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Password" v-model="usuario.password">
        </div>
        <div class="form-group">
          <label for="labelEmail">Mensaje</label>
          <textarea name="" id="" cols="30" rows="10" v-model="usuario.mensaje"></textarea>
        </div>
        <div class="form-check mb-2 mr-sm-2 mb-sm-0">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox"> Remember me
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked v-model="usuario.genero">
            Option one
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input class="form-check-input" type="radio" name="gridRadios2" id="gridRadios2" value="option2" checked v-model="usuario.genero">
            Option two
          </label>
        </div>
        <select class="custom-select mb-2 mr-sm-2 mb-sm-0" id="inlineFormCustomSelect" v-model="usuario.seleccion">
          <option v-for="seleccion in selecciones">{{ seleccion }}</option>
        </select>
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" value="acepto" v-model="usuario.chequeado">
            Aceptar términos
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" value="newsletter" v-model="usuario.chequeado">
            recibir newsletter
          </label>
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="enviarFormulario">Enviar</button>
      </form>
      <div class="data-container" v-if="mostrar">
        <label>Nombre</label>
        <div>
          {{ usuario.nombre }}
        </div>
        <label>Correo</label>
        <div>
          {{ usuario.correo }}
        </div>
        <label>Edad</label>
        <div>
          {{ usuario.edad }}
        </div>
        <label>Password</label>
        <div>
          {{ usuario.password }}
        </div>
        <label>Género</label>
        <div>
          {{ usuario.genero }}
        </div>
        <label>Chequeado</label>
        <div>
          {{ usuario.chequeado }}
        </div>
        <label>Mensaje</label>
        <div>
          {{ usuario.mensaje }}
        </div>
        <label>Seleccion select</label>
        <div>
          {{ usuario.seleccion }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      usuario: {
        nombre: '',
        correo: '',
        edad: '',
        password: '',
        mensaje: '',
        pais: '',
        genero: '',
        chequeado: [],
      },
      mostrar: false,
      selecciones: ['Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco'],
    }
  },
  methods: {
    enviarFormulario() {
      this.mostrar = true;
    }
  }
}
</script>

<style scoped>
  .jumbotron {
    font-size: 0;
  }

  .data-container {
    width: 50%;
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
  }
</style>
