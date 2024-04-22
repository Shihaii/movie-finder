<script async setup lang="ts">
import type { Movie, MovieDetailed } from "@/types";
import { getMovieById, getMovieByName } from "@/controllers/MovieController";
import { useRoute } from "vue-router";
import { type Ref, ref, watch } from "vue";
import SmallSlider from "../components/SmallSlider.vue";

const route = useRoute();
const movies: Ref<Movie[]> = ref([]);
const detailedMovies: Ref<MovieDetailed[]> = ref([]);
movies.value = await getMovieByName(route.params.title);
for (let i = 0; i < movies.value.length; i++) {
  let detailedMovie: MovieDetailed = await getMovieById(movies.value[i].imdbID);
  detailedMovies.value.push(detailedMovie);
}

watch(
  () => route.params.title,
  async (title) => {
    movies.value = await getMovieByName(route.params.title);
    detailedMovies.value = [];
    for (let i = 0; i < movies.value.length; i++) {
      let detailedMovie: MovieDetailed = await getMovieById(
        movies.value[i].imdbID
      );
      detailedMovies.value.push(detailedMovie);
    }
  }
);
</script>

<template>
  <SmallSlider
    v-if="detailedMovies.length > 0"
    :header="route.params.title"
    :movies="detailedMovies"
  ></SmallSlider>
  <el-container v-else>
    <el-container class="header-container">
      <el-text class="header">Not found movies with this name</el-text>
    </el-container>
  </el-container>
</template>

<style scoped>
.header-container {
  text-align: center;
  width: 100%;
  height: 20%;
  justify-content: center;
  flex-grow: 0;
}
.header {
  font-size: 1.6rem;
  color: var(--color-text);
}
</style>
