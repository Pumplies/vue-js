<template>
  <div class="p-10">
    <div class="p-10 border rounded-3xl relative hover:-translate-y-2 hover:shadow-xl">
      <img :src="isFavorite ? '/like-2.svg' : '/like-1.svg'" class="absolute top-6 left-6" alt="" />
      <img :src="image" alt="" />
      <p class="mt-5 mb-5">{{ name }}</p>
      <div class="flex justify-between">
        <div class="flex flex-col">
          <span class="uppercase text-gray-400">Цена:</span>
          <span class="font-bold">{{ price }}</span>
        </div>
        <div>
          <img @click="onClickAdd" :src="isAdded ? '/checked.svg' : '/plus.svg'" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  name: String,
  price: Number,
  isAdded: Boolean,
  isFavorite: Boolean,
  onClickAdd: Function
})
</script>

<style scoped></style>
