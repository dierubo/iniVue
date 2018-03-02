<template>
    <div class="header clearfix">
        <nav>
            <ul class="nav nav-pills pull-right">
                <!-- Con el atributo tag decimos que etiqueta queremos que este nuestro 'router-link' -->
                <!-- Con 'router-link' se puede decir la clase que tiene que tener cuando el elemento esté activo. Se hace con active-class y el nombre 
                de la clase que queremos usar -->
                <!-- Con la propiedad exact hacemos que el elemento activo sea tal cual en la URL. Es decir, quue sin eso ahora mismo pondría los dos
                botones a activo porque los dos tienen la '/'. En cambio, si se pone 'exact' tendrá que ser exactamente lo que dice  -->
                <router-link tag="li" active-class="active" exact to="/"><a>Inicio</a></router-link>
                <router-link tag="li" active-class="active" exact to="/usuarios"><a>Usuarios</a></router-link>
                <!-- OTRA FORMA -->
                <!-- <li><router-link to="/">Inicio</router-link></li>
                <li><router-link to="/usuarios">Usuarios</router-link></li> -->
            </ul>
            <h3 class="text muted">Aplicación Usuarios</h3>
        </nav>
    </div>
</template>
