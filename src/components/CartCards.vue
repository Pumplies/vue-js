<template>
  <!-- <div
    class="pt-5 pl-4 pr-7 pb-5 border rounded-3xl relative hover:-translate-y-2 hover:shadow-xl flex"
  >
    <div>
      <img class="w-[70px] h-[70px] mr-5" :src="image" alt="" />
    </div>
    <div>
      <p>{{ name }}</p>
      <div class="flex justify-between">
        <div class="flex flex-col">
          <span class="font-bold">{{ price }}</span>
        </div>
        <div>
          <img @click="onClickAdd" :src="isAdded ? '/checked.svg' : '/plus.svg'" alt="" />
        </div>
      </div>
    </div>
  </div> -->
  <div class="border rounded-3xl relative flex p-5">
    <img class="w-[70px] h-[70px]" :src="image" alt="" />
    <div class="ml-5">
      <p>{{ name }}</p>
      <div class="flex justify-between">
        <div class="flex flex-col">
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
