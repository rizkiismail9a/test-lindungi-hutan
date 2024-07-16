<script setup lang="ts">
const store = useUserStore();
</script>

<template>
  <Loading v-if="store.isLoading" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
body {
  margin: 0;
  background-color: rgb(248, 248, 248);
}
a {
  text-decoration: none;
  color: black;
}
</style>
