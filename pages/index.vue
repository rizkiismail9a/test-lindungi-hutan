<script setup lang="ts">
import ArticleServices from "~/services/article.services";
import type { Articles } from "~/types/news.type";

const runTimeConfig = useRuntimeConfig();
const userStore = useUserStore();

onMounted(() => {
  getNews();
});

const news = ref<Articles[]>([]);

// Get all articles available
const getNews = async () => {
  try {
    userStore.isLoading = true;
    const { data } = await ArticleServices.getArticles();

    news.value = data;
  } catch (error) {
    console.error(error);
  } finally {
    userStore.isLoading = false;
  }
};

useHead({
  title: "Home",
});
</script>
<template>
  <h1>What in the world?!</h1>

  <div class="card-container">
    <div v-for="article in news" :key="article.source.id">
      <ArticlesCard :article="article" />
    </div>
  </div>
</template>

<style>
.card-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
