import { createApp } from "vue";
import { createPinia } from "pinia";
import "@/assets/base.css";

import App from "./App";
import router from "@/router/index";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
