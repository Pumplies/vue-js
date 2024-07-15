<template>
  <div class="p-10">
    <div class="p-10 border rounded-3xl relative hover:-translate-y-2 hover:shadow-xl">
      <img
        @click="() => onUpdateFavorite(item)"
        :src="item.isFavorite ? '/like-2.svg' : '/like-1.svg'"
        class="absolute top-6 left-6 pointer"
        alt=""
      />
      <img :src="item.imageUrl" alt="" />
      <p class="mt-5 mb-5">{{ item.title }}</p>
      <div class="flex justify-between">
        <div class="flex flex-col">
          <span class="uppercase text-gray-400">Цена:</span>
          <span class="font-bold">{{ item.price }}</span>
        </div>
        <div>
          <img :src="item.isChecked ? '/checked.svg' : '/plus.svg'" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: Object,
  onUpdateFavorite: Function
})
</script>

<style scoped></style>