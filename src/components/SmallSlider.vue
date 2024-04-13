<script setup lang="ts">
import type { Movie, MovieDetailed } from "@/types";
import router from "@/router";
import { useCurrentMovieStore } from "@/stores/currentMovie";

defineProps<{
  movies: MovieDetailed[];
  header?: string | string[];
}>();

const movieDetails = (movie: Movie) => {
  const store = useCurrentMovieStore();
  store.currentMovie = movie;
  router.push(`/movie/${movie.imdbID}`);
};
</script>

<template>
  <el-container class="carousel-header-container">
    <el-text class="carousel-header">{{ header }}</el-text>
  </el-container>
  <el-container direction="vertical" class="carousel-container">
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
        <el-container class="container">
          <el-container class="poster">
            <img :src="movie.poster" alt="" />
          </el-container>
          <el-container class="text-container">
            <el-container class="header-container">
              <el-text class="header">{{ movie.title }}</el-text>
            </el-container>
            <el-container class="item-container">
              <el-text class="label">Year</el-text>
              <el-text class="item-text">{{ movie.year }}</el-text>
            </el-container>
            <el-container class="item-container">
              <el-text class="label">Director</el-text>
              <el-text class="item-text">{{ movie.director }}</el-text>
            </el-container>
          </el-container>
        </el-container>
      </el-carousel-item>
    </el-carousel>
  </el-container>
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
.carousel-container {
  margin-bottom: 10vh;
}
.container {
  padding: 2vh;
  height: 100%;
}
.poster {
  flex-shrink: 0;
  flex-grow: 0;
}
.text-container {
  flex-direction: column;
}
.header-container {
  text-align: center;
  width: 100%;
  height: 20%;
  justify-content: center;
  flex-grow: 0;
}
.item-container {
  padding: 2vh;
  gap: 1vw;
  flex-grow: 0;
}
.label {
  font-size: 1.1rem;
  color: var(--color-text);
  font-weight: bold;
}
.item-text {
  font-size: 1.1rem;
}
.header {
  font-size: 1.6rem;
  color: var(--color-text);
}
.carousel-header-container {
  width: 100%;
  height: 20%;
  flex-grow: 0;
  padding-left: 2vw;
}
.carousel-header {
  font-size: 2.2rem;
  color: var(--color-text);
}
@media (max-width: 990px) {
  .container {
    flex-direction: column;
  }
  .poster {
    height: 60%;
    justify-content: center;
    flex-shrink: 0;
  }
  .text-container {
    flex-grow: 1;
  }
}
</style>
