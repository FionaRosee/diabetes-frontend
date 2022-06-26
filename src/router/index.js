import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import QuestionPageOne from "../views/Question Page One.vue";
import GeneralInformation from "../views/GeneralInformation.vue";
import QuestionPageFourteen from "../views/QuestionPageFourteen.vue"
import QuestionPageThirteen from "../views/QuestionPageThirteen.vue"
import QuestionPageTwelve from "../views/QuestionPageTwelve.vue"
import QuestionPageEleven from "../views/QuestionPageEleven.vue"
import QuestionPageTen from "../views/QuestionPageTen.vue"

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
      name: "generalInformation",
      component: GeneralInformation
    },
    {
      path: "/questionpageone",
      name: "questionpageone",
      component: QuestionPageOne,
    },
    {
      path: "/question_page_ten",
      name: "qp10",
      component: QuestionPageTen,
    },
    {
      path: "/question_page_eleven",
      name: "qp11",
      component: QuestionPageEleven,
    },
    {
      path: "/question_page_twelve",
      name: "qp12",
      component: QuestionPageTwelve,
    },
    {
      path: "/question_page_thirteen",
      name: "qp13",
      component: QuestionPageThirteen,
    },
    {
      path: "/question_page_fourteen",
      name: "qp14",
      component: QuestionPageFourteen,
    }
  ],
});

export default router;
