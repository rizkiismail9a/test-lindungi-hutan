<template>
  <nav>
    <div class="navigator-link">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </div>
  </nav>
  <div class="main-content">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
nav {
  position: sticky;
  top: 0;
  background-color: #fff;
  padding: 12px;
  box-shadow: 1px 2px 5px gray;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.navigator-link {
  display: flex;
  gap: 8px;
  align-items: center;
  width: 800px;
}

.main-content {
  margin: auto;
  max-width: 800px;
  padding: 12px;
}
</style>
