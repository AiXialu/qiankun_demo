import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { registerMicroApps, start } from "qiankun";

const app = createApp(App);

app.use(router);

app.mount("#app");

// Register micro apps
registerMicroApps([
  {
    name: "game1",
    entry: "http://localhost:5173/", // Correct the path here
    container: "#subapp-viewport",
    activeRule: "/game1",
  },
  {
    name: "game2",
    entry: "http://localhost:8082/", // Make sure this is the correct port for game1
    container: "#subapp-viewport",
    activeRule: "/game2",
  },
]);

// Start qiankun
start();
