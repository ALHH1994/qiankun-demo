import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import { registerMicroApps, start } from "qiankun";
Vue.use(Element, { size: "small", zIndex: 3000 });
Vue.config.productionTip = false;

const apps = [
  {
    name: "vueApp",
    entry: "//localhost:10000", //默认会加载html,解析js，动态加载，子应用必须支持跨域，内部使用的是fetch
    container: "#vue",
    activeRule: "/vue",
    prop: {
      a: 1,
    },
  },
  {
    name: "reactApp",
    entry: "//localhost:20000", 
    container: "#react",
    activeRule: "/react",
  },
];
registerMicroApps(apps);
start({
  prefetch: false, //取消预加载
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
