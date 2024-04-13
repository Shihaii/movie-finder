<script async setup lang="ts">
import type { Movie, MovieDetailed } from "@/types";
import { getMovieById, getMovieByName } from "../controllers/MovieController";
import { ref, type Ref } from "vue";
import router from "@/router";
import SmallSlider from "../components/SmallSlider.vue";

{
  {
    console.log("defaulrt home");
  }
}
const getMovies = async (title: string) => {
  let movies: Movie[] = [];
  movies = await getMovieByName(title).then();
  let detailedMovies: MovieDetailed[] = [];
  for (let i = 0; i < movies.length; i++) {
    let detailedMovie: MovieDetailed = await getMovieById(movies[i].imdbID);
    detailedMovies.push(detailedMovie);
  }
  return detailedMovies;
};

const scoobyMovies: Ref<MovieDetailed[]> = ref([]);
scoobyMovies.value = await getMovies("Scooby");

const sherlockMovies: Ref<MovieDetailed[]> = ref([]);
sherlockMovies.value = await getMovies("Sherlock");

const avengersMovies: Ref<MovieDetailed[]> = ref([]);
avengersMovies.value = await getMovies("Avengers");
</script>

<template>
  <el-container direction="vertical">
    <SmallSlider header="Scooby-Doo" :movies="scoobyMovies"></SmallSlider>
    <SmallSlider header="Detectives" :movies="sherlockMovies"></SmallSlider>
    <SmallSlider header="Superhero" :movies="avengersMovies"></SmallSlider>
  </el-container>
</template>
