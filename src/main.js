import Vue from "vue";
import App from "./App.vue";
import Titolo from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

new Vue({
  render: (h) => h(Titolo),
}).$mount("#app");
