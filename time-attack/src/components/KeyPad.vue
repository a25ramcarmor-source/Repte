<script setup>
defineProps({
  tecles: Array,
  bloquejat: Boolean
})

const emit = defineEmits(['premuda'])
</script>

<template>
  <div>
    <button
      v-for="tecla in tecles"
      :key="tecla"
      :disabled="bloquejat"
      @click="emit('premuda', tecla)"
    >
      {{ tecla }}
    </button>
  </div>
</template>

<style scoped></style>