import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import App from "./App.vue";
import Detail from "./components/Detail.vue";
import Table from "./components/Table.vue";
const routes = [
  { path: "/", component: Table },
  { path: "/Detail", component: Detail }
];
const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
