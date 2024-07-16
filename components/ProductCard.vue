<template>
  <div class="container">
    <form @submit.prevent="searchBook">
      <input v-model="typedName" type="text" />
      <button>Search</button>
    </form>
    <div class="card">
      <div
        v-for="book in books"
        :key="book.id"
        class="book-container"
        data-section="card"
      >
        <img :src="book.file" :alt="book.title" />
        <div data-section="name">
          {{ book.title }}
        </div>
        <div data-section="price">
          {{
            Intl.NumberFormat("id", {
              style: "currency",
              currency: "IDR",
            }).format(book.price)
          }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";

type Books = {
  id: string;
  title: string;
  price: number;
  file: string;
};

onMounted(() => {
  getBooksData();
});

const books = ref<Books[]>([]);
const typedName = ref<string>();

// Get the books data from API
const getBooksData = async (): Promise<void> => {
  try {
    const { data } = await axios.get(
      "https://api.npoint.io/80295903913117bfc41f"
    );

    books.value = data;
  } catch (error) {
    console.log(error);
  }
};

// Search the book by its name
const searchBook = () => {
  try {
    if (typedName.value?.length) {
      books.value = books.value.filter((book) =>
        book.title
          .toLowerCase()
          .includes(typedName.value?.toLowerCase() as string)
      );
    } else {
      getBooksData();
    }
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped>
.container {
  margin: auto;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.card {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
}

.book-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 0.3px 8px gray;
  padding: 12px;
}

img {
  width: 200px;
}
</style>
