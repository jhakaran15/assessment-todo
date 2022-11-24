import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tabledata from '../components/Tabledata'
import Cardspage from '../components/Cardspage'
import Darkmode from '../components/Darkmode'



Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: { name: "Tabledata" },
    children: [
      {
        path: "/Tabledata",
        name: "Tabledata",
        component: Tabledata,
      },
      {
        path: "/Cardspage",
        name: "Cardspage",
        component: Cardspage,
      },
      {
        path: "/Darkmode",
        name: "Darkmode",
        component: Darkmode,
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];
  

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
