<template>
    <div>
        <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="../../public/favicon.ico" alt="Your Company" />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up for an account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="handleSubmit" class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" v-model="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 text-center" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          </div>
          <div class="mt-2">
            <input id="password" v-model="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 text-center" />
          </div>
        </div>

        <div>
          <button v-if="!isPending" type="submit" class="flex w-full justify-center rounded-md  px-3 py-1.5 btn text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
          <button v-else type="submit" class="flex w-full justify-center rounded-md  px-3 py-1.5 btn text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" disabled>Working...</button>
          <div v-if='error' class="error">{{ error }}</div>

        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Already have an account?
        <Nuxt-Link to="/auth/login" class="mx-3 font-semibold leading-6 btn">Sign in</Nuxt-Link>
      </p>
    </div>
  </div>
    </div>
</template>

<script setup>

import useUserStore from '~/stores/userStore';
const userStore = useUserStore()
console.log(userStore.currentUser)
definePageMeta({
    layout: "auth",
  })
  const { error, signup, isPending } = useSignup()
  const email = ref('')
  const password = ref('')
  const handleSubmit = async (e) => {
    e.preventDefault()
   await signup(email.value, password.value)
        if (!error.value) {
            console.log(userStore.currentUser)
            await navigateTo('/products/')
        } else if (error.value === 'Firebase: Error (auth/email-already-in-use).'){
            error.value = 'Email in use...'
        } else if(error.value === 'Firebase: Password should be at least 6 characters (auth/weak-password).'){
            error.value = 'Choose a stronger password...'
        }
  }
</script>

<style scoped>

</style>