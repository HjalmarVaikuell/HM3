import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import SignUpView from '../views/SignUpView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [{
        path: '/',
        name: 'Main',
        component: MainView
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUpView
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router