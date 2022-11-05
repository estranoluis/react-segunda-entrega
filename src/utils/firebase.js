import { initializeApp } from "firebase/app";
import {collection, addDoc, getFirestore, getDocs, getDoc, doc} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: process.env.API_KEY,
   authDomain: "op-store-34755.firebaseapp.com",
   projectId: "op-store-34755",
   storageBucket: "op-store-34755.appspot.com",
   messagingSenderId: "403783199238",
   appId: "1:403783199238:web:4cee1d43ef745375453187"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

const loadDB = async() => {
   const promise = await fetch('./data/juegos.json')
   const juegos = await promise.json()

   juegos.forEach( async (juego) => {
      await addDoc(collection(db, "juegos"), {
         titulo:     juego.titulo,
         categoria:  juego.categoria,
         sistemas:   juego.sistemas,
         img:        juego.img,
         precio:     juego.precio
      })
   });
}

const getJuego = async (id) => {
   const juego = await getDoc(doc(db, "juegos", id))
   const item = [juego.id, juego.data()]
   return item
}

const getJuegos = async () => {
   const juegos = await getDocs(collection(db, "juegos"))
   const items = juegos.docs.map(juego => [juego.id, juego.data()])
   return items
}

const createOrdenCompra = async (nombre, apellido, telefono, email, precioTotal) => {
   const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
      email: email,
      precioTotal: precioTotal
   })

   return ordenCompra
}

const getOrdenCompra = async (id) => {
   const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
   return ordenCompra
}

export {loadDB, getJuegos, getJuego, createOrdenCompra, getOrdenCompra}