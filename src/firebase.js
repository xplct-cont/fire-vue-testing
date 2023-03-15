import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
   //Firebase Configuration Here!
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const usersCollection = db.collection('vue')

export const createUser = user => {
  return usersCollection.add(user)
}

