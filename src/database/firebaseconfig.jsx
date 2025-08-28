import { initializeApp } from "firebase/app";
import { initializeFirestore, persistentLocalCache } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Configuración de Firebase usando variables de entorno
const firebaseConfig = {
  apiKey: "AIzaSyAAe8pO3B1r6XblPbSMQejCwcIp2wfdwYk",
  authDomain: "proyecto-santos.firebaseapp.com",
  projectId: "proyecto-santos",
  storageBucket: "proyecto-santos.firebasestorage.app",
  messagingSenderId: "44141876749",
  appId: "1:44141876749:web:42122e6de9a7a75fd6a744",
  measurementId: "G-3R32SXCDZY"
};

// Inicializa Firebase
const appfirebase = initializeApp(firebaseConfig);

// Inicializa Firestore con soporte para persistencia offline
let db;
try {
  db = initializeFirestore(appfirebase, {
    localCache: persistentLocalCache({
      cacheSizeBytes: 100 * 1024 * 1024, // 100 MB (opcional, para limitar tamaño)
    }),
  });
  console.log("Firestore inicializado con persistencia offline.");
} catch (error) {
  console.error("Error al inicializar Firestore con persistencia:", error);
  // Fallback: inicializar sin persistencia si falla
  db = initializeFirestore(appfirebase, {});
}

// Inicializa Authentication
const auth = getAuth(appfirebase);

// Inicializa Storage
const storage = getStorage(appfirebase);

export { appfirebase, db, auth, storage };