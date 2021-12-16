import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";

import TableView from "./components/views/TableView.vue";
import FormsInputsView from "./components/views/FormsInputsView.vue";
import TabsView from "./components/views/TabsView.vue";
import StepperView from "./components/views/StepperView.vue";
import AutoCompleteView from "./components/views/AutoCompleteView.vue";
import CardsView from "./components/views/CardsView.vue";
import ExpansionPanelView from "./components/views/ExpansionPanelView.vue";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: "/expansion", component: ExpansionPanelView },
    { path: "/cards", component: CardsView },
    { path: "/table", component: TableView },
    { path: "/autocomplete", component: AutoCompleteView },
    { path: "/forms", component: FormsInputsView },
    { path: "/tabs", component: TabsView },
    { path: "/steppers", component: StepperView },

    { path: "/", redirect: "/table" },
  ],
});

const app = new Vue({
  router,
  vuetify,
  render: (h) => h(App),
});

app.$mount("#app");
