<template>
  <div class="flex gap-3 ml-3 mt-20 mb-2 justify-between" style="width: 1300px">
    <div class="ml-10 mr-4">
      <h1 class="font-bold text-4xl" style="width: 500px">Все кроссовки</h1>
    </div>
    <select @change="onChange"
      name="" 
      id="" 
      class="border border-gray-300 py-2 px-2 gap-3 outline-none rounded-md">
      <option value="name">По названию</option>
      <option value="-price">Сначала дешевые</option>
      <option value="price">Сначала дорогие</option>
    </select>
    <div class="flex items-center gap-1 h-10 relative" style="width: 300px">
      <img src="/search.svg" alt="" class="w-4 h-5 absolute left-3 cursor-pointer" />
      <form
        action="
      
      "
      >
        <input
          type="text"
          placeholder="Поиск..."
          class="border border-gray-300 px-2 py-2 rounded-md w-17 h-10 placeholder-gray-500 focus:outline-none"
          style="padding-left: 40px"
        />
      </form>
    </div>
  </div>
</template>

<style scoped>
.mr-custom {
  margin-right: 450px;
}
</style>

<script setup>


</script>
