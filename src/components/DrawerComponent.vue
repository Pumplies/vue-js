<template>
  <div>
    <div
      class="z-10 top-0 left-0 fixed w-full h-full bg-black opacity-70"
      @click="toggleDrawer"
    ></div>

    <div class="fixed top-0 right-0 z-20 h-full bg-white w-96 p-10">
      <HeaderCart :closeDrawer="toggleDrawer" />
      <div>
        <CartCards
          image="/sneakers/sneakers-4.jpg"
          name="Мужские Кроссовки Nike Air Max 270"
          :price="12999"
          :isAdded="false"
          :isFavorite="false"
          :onClickAdd="onClickAdd"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderCart from './HeaderCart.vue'
import CartCards from './CartCards.vue'
import { defineProps } from 'vue'

const props = defineProps({
  toggleDrawer: Function
})
</script>

<style scoped></style>
