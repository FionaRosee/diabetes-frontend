import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import QuestionPageOne from "../views/Question Page One.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/questionpageone",
      name: "questionpageone",
      component: QuestionPageOne,
    },
  ],
});

export default router;
