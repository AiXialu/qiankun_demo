// import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld";
import Foo from "./components/foo";

const router = [
  { path: "/foo", component: Foo },
  { path: "/hello", component: HelloWorld },
];


// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

export default router;
