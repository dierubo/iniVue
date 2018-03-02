import InicioComponent from './componentes/inicio.vue';
//import UsuariosComponent from './componentes/usuarios.vue'; // Comentamos esta línea porque está declarado como const para el LazyLoad
import InfoUsuario from './componentes/infoUsuario.vue';

// Si queremos que un componente se cargue cuando lo necesitemos se hará con Lazy Load. Solamente se cargará este componente cuando 
// se haga click en el botón Usuarios
const UsuariosComponent = resolve => {
    require.ensure(['./componentes/usuarios.vue'], () => { // COn esto genera otro build
        resolve(require('./componentes/usuarios.vue'));
    });
}
// Será siempre un array de objetos
export const rutas = [
    {
        path: '',
        component: InicioComponent
    },
    {
        // Los dos puntos de la URL significa que es dinámico, que el valor de id puede cambiar
        // path: '/usuarios/:id',
        //path: '/usuarios',
        //component: UsuariosComponent, children: [
            // Con esto se puede crear subrutas. Con 'name' le damos un nombre a la subruta
            //{path: ':id', component: InfoUsuario, name: 'infoUsuario'}
        //]
        // Lo que hay comentado sobre estas líneas es un ejemplo de subrutas dentro de una ruta
        path: '/usuarios', component: UsuariosComponent, name: 'usuarios'
    },
    { path: '/usuarios/:id', component: InfoUsuario, name: 'infoUsuario'},
    // Por si alguien escribe /users para que se le redirija a la página que queramos
    { path: '/users', redirect: '/usuarios'},
    // Para cualquier cosa que no este en las rutas llevará a la página de inicio
    { path: '*', redirect: ''}
]