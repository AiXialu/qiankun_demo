import { createApp } from "vue";
import App from "./App.vue";
// import { createRouter, createWebHistory } from "vue-router";
// import routes from "./router";


// let basePath = "/vue-test";
// let router = null;
let instance = null;

function render(props = {}) {
  const { container } = props;

//   router = createRouter({
//     history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? basePath : "/"),
//     routes,
//   });

//   router.beforeEach((to, from, next) => {
//     // Avoid infinite loop
//     if (window.__POWERED_BY_QIANKUN__ && to.path.indexOf(basePath) === -1) {
//       next(`${basePath}${to.path}`);
//     } else {
//       next();
//     }
//   });

  instance = createApp(App);
//   instance.use(router);
  instance.mount(container ? container.querySelector("#app") : "#app");
}

// Independent run
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}

export async function mount(props) {
  console.log("[vue] props from main framework", props);
  render(props);
  props.setGlobalState({ loginName: "vue项目-陈女士" });
}

export async function unmount() {
  instance.unmount();
  if (instance._container) {
    instance._container.innerHTML = "";
  }
  instance = null;
//   router = null;
}
