import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import SignUpView from '../views/SignUpView.vue'
import LoginView from '../views/LoginView.vue'
import AddPostView from '../views/AddPostView.vue'
import { TokenService } from '@/services/storage.service'


const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainView
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUpView,
    meta: {
      public: true,  // Allow access to even if not logged in
      onlyWhenLoggedOut: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: {
      public: true,  // Allow access to even if not logged in
      onlyWhenLoggedOut: true
    }
  },
  {
    path: '/addpost',
    name: 'AddPost',
    component: AddPostView
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () =>
        import ( /* webpackChunkName: "about" */ "../views/ContactsView.vue"),  }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.public)
  const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut)
  const loggedIn = !!TokenService.getToken();

  if (!isPublic && !loggedIn) {
    return next({
      path:'/login',
      query: {redirect: to.fullPath}  // Store the full path to redirect the user to after login
    });
  }

  // Do not allow user to visit login page or register page if they are logged in
  if (loggedIn && onlyWhenLoggedOut) {
    return next('/')
  }

  next();
})

export default router