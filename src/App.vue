<script setup lang="ts">
import { RouterView } from "vue-router";
import type { NavigationLink } from "./types";
import Navigation from "./components/Navigation.vue";
const links: NavigationLink[] = [
  { name: "Home", url: "/" },
  { name: "Add Movie", url: "/addmovie" },
];
</script>

<template>
  <header>
    <nav>
      <Navigation :links="links"></Navigation>
    </nav>
  </header>
  <RouterView v-slot="{ Component }">
    <Suspense timeout="0">
      <template #default>
        <component :is="Component" :key="$route.path"></component>
      </template>
      <template #fallback>
        <div
          v-loading="true"
          element-loading-background="#181818"
          element-loading-text="Loading movies"
          style="width: 100%; height: 80vh; background-color: aliceblue"
        ></div>
      </template>
    </Suspense>
  </RouterView>
</template>

<style>
.el-loading-spinner .el-loading-text {
  color: var(--color-text);
  font-size: 1.4rem;
}
</style>
