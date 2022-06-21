import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import QuestionPageOne from "../views/Question Page One.vue";
import Polyuria from "../views/Polyuria.vue";
import GeneralInformation from "../views/GeneralInformation.vue";
import Polydipsia from "../views/Polydipsia.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/general_information",
      component: GeneralInformation
    },
    {
      path: "/questionpageone",
      name: "questionpageone",
      component: QuestionPageOne,
    },
    {
      path: "/Polyuria",
      name: "Polyuria",
      component: Polyuria,
    },
    {
      path: "/Polydipsia",
      name: "Polydipsia",
      component: Polydipsia,
    },
  ],
});

export default router;
