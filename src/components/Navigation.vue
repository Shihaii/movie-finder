<script setup lang="ts">
import { type NavigationLink } from "../types";
import { RouterLink } from "vue-router";
import router from "@/router";
import { type Ref, ref } from "vue";
import { Search } from "@element-plus/icons-vue";

defineProps<{
  links?: NavigationLink[];
}>();

const input: Ref<string> = ref("");

const search = () => {
  router.push(`/results/${input.value}`);
};
</script>

<template>
  <header>
    <el-container class="container">
      <ul>
        <li v-for="link in links">
          <RouterLink :to="link.url" class="">{{ link.name }}</RouterLink>
        </li>
        <li class="search">
          <el-input
            class="search"
            v-model="input"
            style="width: 25vw"
            placeholder="Movie title"
            clearable
          />
          <el-button :icon="Search" style="height: 100%" @click="search()" />
        </li>
      </ul>
    </el-container>
  </header>
</template>

<style scoped>
.container {
  margin-bottom: 5vh;
}
ul {
  list-style-type: none;
  display: flex;
  flex-grow: 1;
  justify-content: start;
  background-color: rgba(240, 248, 255, 0.059);
  gap: 1vw;
}
li {
  display: flex;
}
li a {
  padding-left: 2vw;
  padding-right: 2vw;
  padding-top: 1.5vh;
  padding-bottom: 1.5vh;
  color: var(--primary-text-color);
  font-weight: 650;
  text-decoration: none;
  border-radius: 4px;
}
li a:hover {
  background-color: rgba(240, 248, 255, 0.115);
}
.search {
  --el-input-bg-color: var(--vt-c-black-mute);
  --el-button-bg-color: var(--vt-c-black-mute);
  --el-input-text-color: var(--color-text);
}
</style>
