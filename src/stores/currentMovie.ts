import { ref, computed, type Ref } from "vue";
import { defineStore } from "pinia";
import type { Movie, MovieDetailed } from "@/types";
import { getMovieById } from "@/controllers/MovieController";

export const useCurrentMovieStore = defineStore(
  "currentMovie",
  () => {
    const currentMovie: Ref<Movie> = ref({
      imdbID: "",
      title: "",
      poster: "",
      year: 0,
      type: "",
    });
    const yearsAfterPublication = computed(
      () => new Date().getFullYear() - currentMovie.value.year
    );
    const getMovieDetailed = async () => {
      let detailedMovie: MovieDetailed = await getMovieById(
        currentMovie.value.imdbID
      );
      return detailedMovie;
    };

    return { currentMovie, yearsAfterPublication, getMovieDetailed };
  },
  {
    persist: true,
  }
);
