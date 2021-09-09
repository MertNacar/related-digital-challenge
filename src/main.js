import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

Vue.config.productionTip = false;

new Vue({
  created() {
    axios.defaults.baseURL = `${process.env.VUE_APP_API_URL}`;
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios.defaults.headers.put["Content-Type"] = "application/json";
    axios.interceptors.response.use(
      (response) => {
        return Promise.resolve(response);
      },
      (error) => {
        console.error(error.response.data.message);
        return Promise.reject(error);
      }
    );
  },
  render: (h) => h(App),
}).$mount("#app");
