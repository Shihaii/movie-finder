<script setup lang="ts">
import type { MovieDetailed } from "@/types";
import { getMovieById } from "@/controllers/MovieController";
import { useRoute } from "vue-router";

const route = useRoute();

let movie: MovieDetailed = await getMovieById(route.params.id);
</script>

<template>
  <div class="main-content">
    <div class="header-container">
      <h1>{{ movie.title }}</h1>
    </div>
    <div class="container">
      <div class="vertical-container">
        <img :src="movie.poster" />
        <div class="tags-container">
          <div class="tag">{{ movie.year }}</div>
          <div>|</div>
          <div class="tag">{{ movie.runtime }}</div>
        </div>
      </div>
      <div class="vertical-container">
        <div class="item-container">
          <label class="label" for="">Director: </label>
          <p class="item-text">{{ movie.director }}</p>
        </div>
        <div class="item-container">
          <label class="label" for="">Writers: </label>
          <p class="item-text">{{ movie.writer }}</p>
        </div>
        <div class="item-container">
          <label class="label" for="">Actors: </label>
          <p class="item-text">{{ movie.actors }}</p>
        </div>
        <div class="item-container">
          <label class="label" for="">Genre: </label>
          <p class="item-text">{{ movie.genre }}</p>
        </div>
        <div class="item-container">
          <label class="label" for="">Plot: </label>
          <p class="item-text">{{ movie.plot }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-content {
  margin-left: 10vw;
  margin-right: 10vw;
}
.container {
  display: flex;
  gap: 2vw;
}
.header-container {
  display: flex;
  text-align: center;
  justify-content: center;
  margin-bottom: 5vh;
}
.header-container h1 {
  font-size: 2.4rem;
}
.tags-container {
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 1vw;
  font-size: 1.1rem;
}
.text-container {
  display: flex;
  flex-direction: column;
}
.item-container {
  display: flex;
  border-bottom: 1px solid white;
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
