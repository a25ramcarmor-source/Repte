<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Board</RouterLink>
      </nav>
  </header>
  <RouterView />
</template>

<style scoped>
  header {
    background-color: #1e293b;
    padding: 20px 30px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

nav {
    display: flex;

    align-items: center;
}

nav a {
    color: white;
    text-decoration: none;
    font-family: Arial, sans-serif;
    font-size: 20px;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 8px;
    transition: 0.3s;
}

nav a:hover {
    background-color: #38bdf8;
    color: #1e293b;
}
</style>
