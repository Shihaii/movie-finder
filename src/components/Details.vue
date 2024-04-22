<script setup lang="ts">
import type { MovieDetailed } from "@/types";
import { useRoute } from "vue-router";
import { useCurrentMovieStore } from "@/stores/currentMovie";

const store = useCurrentMovieStore();
let movie: MovieDetailed = await store.getMovieDetailed();
</script>

<template>
  <el-container class="main-content">
    <el-container class="header-container">
      <el-text class="header">{{ movie.title }}</el-text>
    </el-container>
    <el-container class="container">
      <el-container direction="vertical" style="flex-shrink: 0">
        <el-container class="poster">
          <img :src="movie.poster" />
        </el-container>
        <el-container class="tags-container">
          <el-text class="item-text"
            >{{ movie.year }} | {{ movie.runtime }}</el-text
          >
        </el-container>
      </el-container>
      <el-container direction="vertical">
        <el-container class="item-container">
          <el-text class="label" for="">Director: </el-text>
          <el-text class="item-text">{{ movie.director }}</el-text>
        </el-container>
        <el-container class="item-container">
          <el-text class="label" for="">Writers: </el-text>
          <el-text class="item-text">{{ movie.writer }}</el-text>
        </el-container>
        <el-container class="item-container">
          <el-text class="label" for="">Actors: </el-text>
          <el-text class="item-text">{{ movie.actors }}</el-text>
        </el-container>
        <el-container class="item-container">
          <el-text class="label" for="">Genre: </el-text>
          <el-text class="item-text">{{ movie.genre }}</el-text>
        </el-container>
        <el-container class="item-container">
          <el-text class="label" for="">Plot: </el-text>
          <el-text class="item-text">{{ movie.plot }}</el-text>
        </el-container>
      </el-container>
    </el-container>
  </el-container>
</template>

<style scoped>
.main-content {
  margin-left: 10vw;
  margin-right: 10vw;
  flex-direction: column;
}
.container {
  gap: 2vw;
}
.header-container {
  text-align: center;
  justify-content: center;
  margin-bottom: 5vh;
}
.header-container h1 {
  font-size: 2.4rem;
}
.tags-container {
  text-align: center;
  justify-content: center;
  gap: 1vw;
  font-size: 1.1rem;
}
.item-container {
  border-bottom: 1px solid white;
  padding: 2vh;
  gap: 1vw;
  flex-grow: 0;
}
.label {
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--color-text);
}
.item-text {
  font-size: 1.1rem;
  color: var(--color-text);
}
.poster {
  justify-content: center;
}
.poster img {
  width: 100%;
}
.header {
  font-size: 1.6rem;
  color: var(--color-text);
}
@media (max-width: 750px) {
  .container {
    flex-direction: column;
  }
  .main-content {
    margin-left: 2vw;
    margin-right: 2vw;
  }
}
</style>
