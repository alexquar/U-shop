import { getAuth } from "firebase/auth";

export default defineNuxtPlugin((nuxtApp) => {
    const auth = getAuth()

  return {
    provide: {
      auth
    },
  };
});