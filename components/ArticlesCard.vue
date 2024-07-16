<script setup lang="ts">
import type { Articles } from "~/types/news.type";
import formatDate from "~/utils/formatDate.utils";

defineProps<{
  article: Articles;
}>();

const imagePlaceholder =
  "https://dpm.mercubuana-yogya.ac.id/wp-content/uploads/2023/07/placeholder-3.png";

// Open the news link
const openNews = (link: string) => {
  window.open(link);
};
</script>
<template>
  <div class="card" @click="openNews(article.url)">
    <img :src="article.urlToImage ?? imagePlaceholder" alt="" />
    <span class="author">Arctile by: {{ article.author ?? "Anonymous" }}</span>
    <h3>
      {{ article.title }}
    </h3>
    <span class="preview-content">{{ article.content }}</span>
    <span class="publish-date">{{ formatDate(article.publishedAt) }}</span>
  </div>
</template>

<style scoped>
.card {
  width: 800px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  box-shadow: 7px 6px 16px -4px rgba(159, 159, 159, 0.66);
  -webkit-box-shadow: 7px 6px 16px -4px rgba(159, 159, 159, 0.66);
  -moz-box-shadow: 7px 6px 16px -4px rgba(159, 159, 159, 0.66);
  gap: 12px;
  padding: 8px;
  cursor: pointer;
}

.author {
  font-size: 14px;
}

.preview-content {
  font-size: 16px;
}

img {
  width: 100%;
  object-fit: contain;
}
</style>
