import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

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
