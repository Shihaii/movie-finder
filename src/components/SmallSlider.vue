<script setup lang="ts">
import type { Movie, MovieDetailed } from "@/types";
import router from "@/router";
import { useCurrentMovieStore } from "@/stores/currentMovie";

defineProps<{
  movies: MovieDetailed[];
  header?: string;
}>();

const movieDetails = (movie: Movie) => {
  const store = useCurrentMovieStore();
  store.currentMovie = movie;
  router.push(`/movie/${movie.imdbID}`);
};
</script>

<template>
  <div class="header-container">
    <h1>{{ header }}</h1>
  </div>
  <el-carousel
    indicator-position="outside"
    type="card"
    height="60vh"
    :autoplay="false"
  >
    <el-carousel-item
      v-for="movie in movies"
      :key="movie.imdbID"
      @click="movieDetails(movie)"
    >
      <div class="container">
        <img class="poster" :src="movie.poster" alt="" />
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

<style>
.el-carousel__item {
  background-color: var(--color-background-mute);
}
.el-carousel__item img {
  height: 100%;
}
</style>
<style scoped>
.container {
  padding: 2vh;
  display: flex;
  flex-direction: row;
  height: 100%;
}
.text-container {
  display: flex;
  width: 100%;
  flex-direction: column;
}
.header-container {
  display: flex;
  text-align: center;
  width: 100%;
  padding-left: 4vw;
  margin-bottom: 5vh;
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
