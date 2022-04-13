import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Nav from "../components/Navigation.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path:"/nav",
    name:"nav",
    component:Nav,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
