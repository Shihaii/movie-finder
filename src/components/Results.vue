<script setup lang="ts">
import type { Movie, MovieDetailed } from "@/types";
import { getMovieById, getMovieByName } from "@/controllers/MovieController";
import { useRoute } from "vue-router";
import { type Ref, ref, watch } from "vue";

const route = useRoute();

let movies: Ref<Movie[]> = ref([]);
let detailedMovies: Ref<MovieDetailed[]> = ref([]);
movies.value = await getMovieByName(route.params.title).then();
for (let i = 0; i < movies.value.length; i++) {
  let detailedMovie: MovieDetailed = await getMovieById(movies.value[i].imdbID);
  detailedMovies.value.push(detailedMovie);
}

watch(
  () => route.params.title,
  async (title) => {
    movies.value = await getMovieByName(route.params.title);
  }
);
</script>

<template>
  <el-carousel :interval="4000" type="card" height="70vh" :autoplay="false">
    <el-carousel-item
      v-for="movie in detailedMovies"
      :key="movie.imdbID"
      @click="$router.push(`/movie/${movie.imdbID}`)"
    >
      <div class="container">
        <img :src="movie.poster" alt="" />
        <div class="text-container">
          <div class="header-container">
            <h1>{{ movie.title }}</h1>
          </div>
          <div class="item-container">
            <label class="label">Year</label>
            <p class="item-text">{{ movie.year }}</p>
          </div>
          <div class="item-container">
            <label class="label">Director</label>
            <p class="item-text">{{ movie.director }}</p>
          </div>
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
.el-carousel__item:nth-child(2n) {
  background-color: #202020;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #202020;
}

.el-carousel__item img {
  height: 100%;
}
.container {
  display: flex;
  flex-direction: row;
  height: 100%;
}
.text-container {
  display: flex;
  width: 100%;
  flex-direction: column;
}
.header-container h1 {
  justify-self: center;
  align-self: center;
}
.header-container {
  display: flex;
  text-align: center;
  width: 100%;
  height: 20%;
  justify-content: center;
}
.item-container {
  display: flex;
  padding: 2vh;
  gap: 1vw;
}
.label {
  font-size: 1.1rem;
  font-weight: bold;
}
.item-text {
  font-size: 1.1rem;
}
</style>
