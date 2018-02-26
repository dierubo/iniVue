import InicioComponent from './componentes/inicio.vue';
import UsuariosComponent from './componentes/usuarios.vue';

// Será siempre un array de objetos
export const rutas = [
    {
        path: '',
        component: InicioComponent
    },
    {
        path: '/usuarios',
        component: UsuariosComponent
    }
]