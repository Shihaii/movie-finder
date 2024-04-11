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
  <el-carousel :interval="4000" type="card" height="40vh" :autoplay="false">
    <el-carousel-item
      v-for="movie in movies"
      :key="movie.imdbID"
      @click="movieDetails(movie)"
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
.header-container {
  display: flex;
  text-align: center;
  width: 100%;
  padding-left: 4vw;
  /* justify-content: center; */
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
