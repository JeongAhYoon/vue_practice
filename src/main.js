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
  { path: "/", component: Home, props: { name: "Kelly Developer" } },
  {
    path: "/search",
    component: SearchUser,
    props: (route) => ({ query: route.query.q }),
  },
  {
    path: "/about/:id",
    components: {
      default: About,
      LeftSideBar: RightSideBar,
      RightSideBar: LeftSideBar,
      Header,
    },
    props: { default: true, RightSideBar: false, LeftSideBar: false },
  },
  {
    path: "/articles",
    name: "posts",
    components: { default: Posts, Header },
    children: [
      { path: ":id", name: "singlePost", component: SinglePost, props: true },
    ],
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
//it would triggered whenever you move from this navigation to another navigation.

function authAccess(to) {
  console.log("accessing");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (to.path.includes("articles") || to.path.includes("notfound")) {
        resolve(true);
      } else {
        resolve(false);
      }
    }, 2000);
  });
}

router.beforeEach(async (to, from, next) => {
  //next(false); // 화면이 아예 출력이 안됨. Path는 그대로 있음
  //next(true); //넘어갈수 있게 해주는 것것
  const hasAccess = await authAccess(to);
  // if (!hasAccess) next("/notfound");
  if (!hasAccess) next({ path: '/notfound' });
  else next(true);
});

const app = createApp(App);
app.use(router);
app.mount("#app");
