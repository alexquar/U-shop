<template>
    <div class="container justify-center text-center m-10">
        <h1 v-if="products.length" class="text-5xl">Success!</h1>
        <div class="my-10 flex items-center justify-center">
      <img class="mx-5 h-10 w-auto" src="../../public/favicon.ico" alt="Your Company" />
      <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Thank you for choosing U Shop</h2>
    </div>
        <div v-if="products.length" class="my-20">
            <p class="my-2" >Your order is now being completed. Please expect delivery in approximately 5 business days.</p>
            <p class="my-2" >The amount of ${{ cost }} CAD has been charged to your credit card. </p>
        </div>
        <div class="bg-white my-20">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8" v-if="products.length">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900" >You purchased:</h2>

      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in products" :key="product.id" class="group relative">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img :src="product.image" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
          </div>
          <div class="mt-4 flex flex-col justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <p>
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.title }}
                </p>
              </h3>
              <p class="mt-1 text-sm text-gray-500"># of items: {{ product.count }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">Price for each: ${{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">You shouldn't be seeing this... did you make a purchase???</h2>

      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

    </div>
  </div>
  </div>
  <div class="mx-auto max-w-2xl p-10 sm:px-6 sm:py-24 lg:max-w-7xl">
    <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 text-xl">
    <Nuxt-Link to="/">   Head home? </Nuxt-Link>  or <Nuxt-Link to='/products/' class="font-semibold text-[#9BC1BC]"><span class="absolute inset-0" aria-hidden="true"></span>Keep shopping! <span aria-hidden="true">&rarr;</span></Nuxt-Link>
        </div>  </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "auth",
  })
import useItemsStore from '~/stores/itemsStore.js';
  const itemsStore = useItemsStore()
const products = itemsStore.all
const cost = itemsStore.total
itemsStore.reset()
</script>

<style scoped>

</style>