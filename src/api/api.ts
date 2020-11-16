import dayjs from 'dayjs'
import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

import { BlogPost } from '@/composables/BlogPosts'
import { useUserAuth } from '@/composables/UserAuth'

export type User = null | firebase.User
export type UserProfile = {
  displayName?: string | null | undefined
  photoURL?: string | null | undefined
}

export function useFirebase() {
  const firebaseConfig = {
    apiKey: 'AIzaSyDL6pogJGYpRfOqDQ2IBLCnGc6dMdhiDfc',
    authDomain: 'adapap-portfolio.firebaseapp.com',
    databaseURL: 'https://adapap-portfolio.firebaseio.com',
    projectId: 'adapap-portfolio',
    storageBucket: 'adapap-portfolio.appspot.com',
    messagingSenderId: '632269410132',
    appId: '1:632269410132:web:01b1327de25a9e2f8d42c1',
    measurementId: 'G-G4Q2FLJZDC',
  }

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
  }

  const db = firebase.firestore()
  const auth = firebase.auth()
  return {
    auth,
    db,
  }
}

const { db } = useFirebase()
const { user } = useUserAuth()
export class API {
  // Firestore Collections
  private static POSTS = db.collection('/posts')

  // API Methods
  static async CREATE_POST(post: BlogPost) {
    const author = user.value?.displayName
    if (!author) {
      return Promise.reject('Author name is undefined.')
    }
    post.author = author
    post.created = dayjs().unix()
    const docRef = API.POSTS.doc()
    post.id = docRef.id
    try {
      await docRef.set(post)
    } catch (err) {
      return Promise.reject('Failed to create new blog post.')
    }
  }

  static async FETCH_POSTS(limit = 15): Promise<BlogPost[]> {
    try {
      const res = await API.POSTS.limit(limit).get()
      return res.docs.map((doc) => {
        return doc.data() as BlogPost
      })
    } catch (err) {
      return Promise.reject('Failed to retrieve blog posts.')
    }
  }

  static async LOAD_POST(id: string): Promise<BlogPost> {
    try {
      const res = await API.POSTS.doc(id).get()
      return res.data() as BlogPost
    } catch (err) {
      return Promise.reject('Failed to retrieve blog post by ID.')
    }
  }
}
