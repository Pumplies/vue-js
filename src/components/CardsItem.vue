<template>
  <div class="p-10 grid grid-cols-4 gap-5">
    <Cards
      image="/sneakers/sneakers-4.jpg"
      name="Мужские Кроссовки Nike Blazer Mid Suede"
      :price="12999"
      :isAdded="false"
      :isFavorite="false"
      :onClickAdd="onClickAdd"
    />
    <Cards />
    <Cards />
    <Cards />
    <Cards />
  </div>
</template>

<script setup>
import Cards from './AllCrosiComponent.vue'

const onClickAdd = () => {
  alert('Добавил')
}
</script>

<style scoped></style>
