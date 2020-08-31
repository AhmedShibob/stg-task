import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/registration",
  },
  {
    path: "/registration",
    name: "registration",
    component: () =>
      import(/* webpackChunkName: "registration" */ "../views/registration.vue"),
  },
  {
    path: "/verification*",
    name: "verification",
    component: () =>
      import(/* webpackChunkName: "verification" */ "../views/verification.vue"),
  },
  {
    path: "/goToMail",
    name: "goToMail",
    component: () =>
      import(/* webpackChunkName: "goToMail" */ "../views/goToMail.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
