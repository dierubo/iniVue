import InicioComponent from './componentes/inicio.vue';
import UsuariosComponent from './componentes/usuarios.vue';

// Será siempre un array de objetos
export const rutas = [
    {
        path: '',
        component: InicioComponent
    },
    {
        // Los dos puntos de la URL significa que es dinámico
        path: '/usuarios/:id',
        component: UsuariosComponent
    }
]