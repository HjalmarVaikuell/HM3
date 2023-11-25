import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import SignUpView from '../views/SignUpView.vue'

const routes = [{
        path: '/',
        name: 'Main',
        component: MainView
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUpView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router