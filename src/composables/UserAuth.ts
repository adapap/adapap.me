import { useFirebase, User, UserProfile } from '@/api/api'

import { useRouter } from 'vue-router'
import { ref } from 'vue'

const { db, auth } = useFirebase()

const user = ref(null as User)
const isLoggedIn = ref(false)

auth.onAuthStateChanged((authUser) => {
  if (authUser) {
    isLoggedIn.value = true
  } else {
    isLoggedIn.value = false
  }
  user.value = authUser
})

export function useUserAuth() {
  const router = useRouter()

  const login = async (email: string, password: string) => {
    await auth
      .signInWithEmailAndPassword(email, password)
      .then((_) => {
        router.push('/')
      })
      .catch((err) => {
        console.log(`[Error] ${err.message}`)
      })
  }

  const logout = async () => {
    auth
      .signOut()
      .then((_) => {
        router.push('/')
      })
      .catch((err) => {
        console.log(`[Error] ${err.message}`)
      })
  }

  const updateProfile = async (profile: UserProfile) => {
    if (!user.value) {
      router.push('/login')
    }
    user.value
      ?.updateProfile(profile)
      .then((_) => {
        console.log('User profile updated!')
      })
      .catch((err) => {
        console.log(`[Error] ${err.message}`)
      })
  }

  return {
    isLoggedIn,
    login,
    logout,
    updateProfile,
    user,
  }
}
