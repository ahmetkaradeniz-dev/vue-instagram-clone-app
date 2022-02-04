import { createRouter,createWebHistory } from 'vue-router';

import LoginVue from '../views/auth/Login.vue'
import RegisterVue from '../views/auth/Register.vue'

const routes = [
    { path: '/', component: LoginVue,name:'login' },
    { path: '/register', component: RegisterVue },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
  