import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import NotFound from "./pages/NotFound.vue";
import About from "./pages/About.vue";
import Home from "./pages/Home.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Posts from "./pages/Posts.vue";
import SinglePost from "./pages/SinglePost.vue";
import PostComponent from "./pages/PostComponent.vue";
import ProductComponent from "./pages/ProductComponent.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  {
    path: "/post",
    name: "posts",
    component: Posts,
    children: [{ path: ":id", name:'singlePost', component: SinglePost }],
  },
  { path: "/:productName+", component: ProductComponent },
  { path: "/:postId(\\d+)", component: PostComponent },
  { path: "/:pathMath(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // strict // 이거는 슬래시(/) 같은게 뒤에 들어있으면 무조건 오류나게 해줌..
});
const app = createApp(App);
app.use(router);
app.mount("#app");
