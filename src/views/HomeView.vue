<script setup lang="ts">
import type { Movie, MovieDetailed } from "@/types";
import Home from "../components/Home.vue"


</script>

<template>
  <main>
    <Suspense>
  <template #default>
  <Home></Home>
  </template>
  <template #fallback></template>
    </Suspense>
   
  </main>
</template>
