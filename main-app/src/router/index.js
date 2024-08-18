import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../views/HomePage.vue'; // Update to match the new file name
 // 主应用的首页

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage, // 主应用的首页组件
  },
  {
    path: "/game1", // 当用户访问 /game1 路径时
    name: "Game1",
    component: () => import("../views/Game1Placeholder.vue"), // 可选：加载一个占位组件
  },
  {
    path: "/game2",
    name: "Game2",
    component: () => import("../views/Game1Placeholder.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
