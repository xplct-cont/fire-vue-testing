import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
  apiKey: "AIzaSyDuIUxc8SP7QZs4J_y2Flnk_wytDx0GG-k",
  authDomain: "vue-f-1f1bb.firebaseapp.com",
  projectId: "vue-f-1f1bb",
  storageBucket: "vue-f-1f1bb.appspot.com",
  messagingSenderId: "629789211006",
  appId: "1:629789211006:web:bc7fe42dbd315282b41b2f"
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const usersCollection = db.collection('vue')

export const createUser = user => {
  return usersCollection.add(user)
}

