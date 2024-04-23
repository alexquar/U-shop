import { projectAuth } from '../firebase/config'
const error = ref(null)
const id = ref(null)
const isPending = ref(false)
const signup = async (email, password) => {
  error.value = null
    isPending.value = true
  try {
    const res = await projectAuth.createUserWithEmailAndPassword(email, password)
    if (!res) {
      throw new Error('Could not complete signup')
    }
    error.value = null
    isPending.value = false
  }
  catch(err) {
    console.log(err.message)
    error.value = err.message
    if(err.message == "Firebase: Password should be at least 6 characters (auth/weak-password)."){
      error.value = "Please choose a stronger passsword"
    }
    isPending.value = false
  }
}

const useSignup = () => {
  return { error, signup, isPending, id }
}

export default useSignup