<template>
    <div>
      <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex items-center justify-between">
          <NuxtLink to="/products/" class="font-bold">U Shop</NuxtLink>
          <div v-if="user" class="text-md hidden md:block">Hey, {{ user.email }}!</div>
          <div class="flex">
            <!--make these conditional-->
          <Nuxt-Link v-if='!user.email' to="/auth/login" class="btn mx-1 md:mx-3 px-5 rounded-full"> Login </Nuxt-Link>
          <Nuxt-Link v-if='!user.email' to="/auth/signup" class="btn mx-1 md:mx-3 px-5 rounded-full"> Signup </Nuxt-Link>
          <div class="mx-1 md:mx-3 flex">
          <NavCart />
          <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">{{ itemsStore.itemsLength }} Items</span>
        </div>
        </div>
        </nav>
      </header>
      <div class="container mx-auto p-4">
        <slot />
      </div>
      <footer class="container mx-auto p-4 flex justify-between border-t-2">
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Shop</NuxtLink></li>
        </ul>
      </footer>
    </div>
  </template>
  <script setup>
  import useItemsStore from '~/stores/itemsStore.js';
  
  const itemsStore = useItemsStore()
  import useGetUser from "~/composables/getUser"
const {getUser} = useGetUser()
const {user} = await getUser()
  </script>
  <style scoped>
    .router-link-exact-active {
      color: #9BC1BC;
    }
  </style>