<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import type { NavigationLink } from './types';
import Navigation from './components/Navigation.vue';
const links : NavigationLink[] = [
{name: "Home", url: "/"},
{name: "About", url: "/about"},
{name: "Add Movie", url: "/addmovie"}
];


</script>

<template>
  <header>
      <nav>
        <Navigation :links="links"></Navigation>
      </nav>
  </header>
  <Suspense>
    <template #default>
      
        <RouterView />
     
    </template>
    <template #fallback>

    </template>
  </Suspense>
 
</template>

<style scoped>

</style>
