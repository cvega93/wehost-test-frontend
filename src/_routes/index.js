import Vue from 'vue'
import Router from 'vue-router'
import Home from '../Views/Home'

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {path: '*', redirect: '/'}
    ]
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/login','/'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
    if (authRequired && !loggedIn) {
        return next('/login');
    } else {
        next();
    }
});
