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
import LeftSideBar from "./components/LeftSideBar.vue";
import RightSideBar from "./components/RightSideBar.vue";
import Header from "./components/HeaderComponent.vue";
import SearchUser from "./pages/SearchUser.vue";
//import RightSideBar from "./components/RightSideBar.vue";

const routes = [
  { path: "/", component: Home, props: {name: "Kelly Developer"} },
  { path: "/search", component: SearchUser, props:(route) => ({query: route.query.q}) } ,
  { path: "/about/:id", components: { default: About, LeftSideBar: RightSideBar, RightSideBar: LeftSideBar, Header}, props: {default: true, RightSideBar: false, LeftSideBar: false} },
  {
    path: "/post",
    name: "posts",
    components: { default: Posts, Header},
    children: [{ path: ":id", name: "singlePost", component: SinglePost, props: true }],
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
