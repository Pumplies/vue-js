<template>
  <div class="p-10 grid grid-cols-4 gap-5">
    <Cards
      v-for="item in items"
      :key="item._id"
      :item="item"
      :onUpdateFavorite="onUpdateFavorite"
    />
  </div>
</template>

<script setup>
import Cards from './AllCrosiComponent.vue'
defineProps({
  items: Array,
  onUpdateFavorite: Function
})
</script>

<style scoped></style>
