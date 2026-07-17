import { db } from "./firebase-config.js"; 
import { collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";

const COLLECTION_NAME = "customers";

export const FirestoreCRUD = {
  async create(data) {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), data);
    return { id: docRef.id, ...data };
  },

  async read(id = null) {
    if (id) {
      const docSnap = await getDoc(doc(db, COLLECTION_NAME, id));
      if (!docSnap.exists()) throw new Error("Documento no existe");
      return { id: docSnap.id, ...docSnap.data() };
    }
    const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  async update(id, data) {
    const docRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(docRef, data);
    return { id, ...data };
  },

  async delete(id) {
    const docRef = doc(db, COLLECTION_NAME, id);
    await deleteDoc(docRef);
    return id;
  }
};