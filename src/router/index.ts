import { createRouter, createWebHistory } from "vue-router";
import Details from "@/components/Details.vue";
import AddMovie from "@/components/AddMovie.vue";
import Results from "@/components/Results.vue";
import Home from "@/components/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/movie/:id",
      name: "movie",
      component: Details,
    },
    {
      path: "/addmovie",
      name: "addmovie",
      component: AddMovie,
    },
    {
      path: "/results/:title",
      name: "results",
      component: Results,
    },
  ],
});

export default router;
