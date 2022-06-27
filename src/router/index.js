import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import QuestionPageOne from "../views/Question Page One.vue";
import Polyuria from "../views/Polyuria.vue";
import GeneralInformation from "../views/GeneralInformation.vue";
import Polydipsia from "../views/Polydipsia.vue";
import QuestionPageFourteen from "../views/QuestionPageFourteen.vue"
import QuestionPageThirteen from "../views/QuestionPageThirteen.vue"
import QuestionPageTwelve from "../views/QuestionPageTwelve.vue"
import QuestionPageEleven from "../views/QuestionPageEleven.vue"
import QuestionPageTen from "../views/QuestionPageTen.vue"
import QuestionPageNine from "../views/QuestionPageNine.vue"
import QuestionPageEight from "../views/QuestionPageEight.vue"
import QuestionPageSeven from "../views/QuestionPageSeven.vue"

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
      name: "General information",
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
    {
      path: "/question_page_seven",
      name: "Genital thrush",
      component: QuestionPageSeven
    },
    {
      path: "/question_page_eight",
      name: "Visual blurring",
      component: QuestionPageEight,
    },
    {
      path: "/question_page_nine",
      name: "Itching",
      component: QuestionPageNine,
    },
    {
      path: "/question_page_ten",
      name: "Irritability",
      component: QuestionPageTen,
    },
    {
      path: "/question_page_eleven",
      name: "Delayed healing",
      component: QuestionPageEleven,
    },
    {
      path: "/question_page_twelve",
      name: "Partial paresis",
      component: QuestionPageTwelve,
    },
    {
      path: "/question_page_thirteen",
      name: "Muscle stiffness",
      component: QuestionPageThirteen,
    },
    {
      path: "/question_page_fourteen",
      name: "Circular hair loss",
      component: QuestionPageFourteen,
    },
  ],
});

export default router;
