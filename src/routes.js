import { createRouter, createWebHashHistory } from 'vue-router';
import Register from './pages/Register.vue';
import Login from './pages/Login.vue';
import ConfirmPassword from './pages/ConfirmPassword.vue';
import ForgotPassword from './pages/ForgotPassword.vue';
import VerifyEmail from './pages/VerifyEmail.vue';
import ResetPassword from './pages/ResetPassword.vue';

const routes = [
  {
    path: '/',
    name: 'Register',
    component: Register,
  },
  { path: '/login', name: 'Login', component: Login },
  { path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword },
  { path: '/reset-password', name: 'ResetPassword', component: ResetPassword },
  { path: '/verify-email', name: 'VerifyEmail', component: VerifyEmail },
  { path: '/confirm-email', name: 'ConfirmPassword', component: ConfirmPassword },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export { router };
