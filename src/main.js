import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VeeValidatePlugin from "./includes/validation";
import { auth } from "./includes/firebase";

import "./assets/base.css";
import "./assets/main.css";

let app;

// running firebase auth before initializing vue app
auth.onAuthStateChanged(() => {
  // checking if the app is already initialized and skipping the initialization
  if (!app) {
    app = createApp(App);

    app.use(createPinia());
    app.use(router);
    app.use(VeeValidatePlugin);

    app.mount("#app");
  }
});
