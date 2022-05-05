import Vue from "vue";
import App from "./App.vue";
import { VuePlugin } from "vuera";
import { BootstrapVue } from "bootstrap-vue";

// load css for bootstap-vue
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { router } from "./routes";

Vue.use(VuePlugin);
Vue.use(BootstrapVue);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
