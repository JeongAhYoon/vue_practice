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
import { createPinia } from "pinia";
//import RightSideBar from "./components/RightSideBar.vue";

const routes = [
  { path: "/", components: { default: Home, Header }, props: { name: "Kelly Developer" }, 
  
  // beforeEnter(to, from) {
  //   console.log("before Enter");
  // }
  beforeEnter: [auth1, auth2]
},
  {
    path: "/search",
    component: SearchUser,
    props: (route) => ({ query: route.query.q }),
    
  },
  {
    path: "/about",
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

function auth1(to, from) {

  console.log("auth1");
  return true;
  //return false;
}

function auth2(to, from) {
  console.log("auth2");
  return true;
}



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
  console.log('before Each');
  // //next(false); // 화면이 아예 출력이 안됨. Path는 그대로 있음
  // //next(true); //넘어갈수 있게 해주는 것것
  // const hasAccess = await authAccess(to);
  // // if (!hasAccess) next("/notfound");
  // if (!hasAccess) next({ path: "/notfound" });
  // else next(true);
  next(true);
});

//this would be called whenever goint to another route
router.beforeResolve(async (to) => {
  if (to.path.includes("articles")) {
    await authAccess(to);
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    app.provide('postsData', await response.json());
  }
 
});

//afterEach: it doesn't stop the nevigation
//this does not affect the navigation
router.afterEach((to, from) => {
// console.log("afterEach");
});

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");
