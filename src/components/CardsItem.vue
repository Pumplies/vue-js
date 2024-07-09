<template>
  <div class="p-10 grid grid-cols-4 gap-5">
    <Cards
      v-for="item in items"
      :key="item.id"
      :image="item.imageUrl"
      :name="item.title"
      :price="item.price"
      :isAdded="false"
      :isFavorite="false"
      :onClickAdd="onClickAdd"
    />
    
  </div>
</template>

<script setup>
import Cards from './AllCrosiComponent.vue'
defineProps({
  items: Array
})

const onClickAdd = () => {
  alert('Добавил')
}



</script>

<style scoped></style>
