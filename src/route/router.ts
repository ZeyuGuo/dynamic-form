import Vue from 'vue';
import Router, {Route} from 'vue-router';

import formrouter from './form.router';




Vue.use(Router);

const router = new Router({
  base: process.env.BASE_URL,
  routes: [
    formrouter,
  ],
});

export default router;
