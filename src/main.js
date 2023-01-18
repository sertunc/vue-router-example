import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
Vue.config.productionTip = false;

import App from "./App.vue";
import HomePage from "./components/HomePage.vue";
import UserProfile from "./components/UserProfile.vue";
import UserPosts from "./components/UserPosts.vue";

const router = new VueRouter({
  routes: [
    { path: "/", component: HomePage, name: "home" },
    { path: "/user/:id", component: UserProfile },
    { path: "/user/:userId/posts", component: UserPosts },
  ],
  mode: "history",
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
