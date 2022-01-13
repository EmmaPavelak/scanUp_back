import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  updateDoc,
} from '@firebase/firestore';
import { Injectable } from '@nestjs/common';

@Injectable()
export class productsService {
  db = getFirestore();

  async findAll() {
    const querySnapshot = await getDocs(collection(this.db, 'products'));
    const datatab = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
      const product = doc.data();
      console.log(doc.id);
      product.id = doc.id;
      datatab.push(product);
    });
    return datatab;
  }

  async getById(id) {
    const docRef = doc(this.db, 'products', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
      return docSnap.data();
    } else {
      console.log('No such document!');
    }
  }
  async create(obj) {
    const docRef = await addDoc(collection(this.db, 'products'), obj);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
      return docSnap.data();
    } else {
      console.log('No such document!');
    }
  }
  async updateProduct(id, obj) {
    await updateDoc(doc(this.db, 'products', id), obj);
    console.log(`Update ${id} ok`);
    return `Update ${id} ok`;
  }
  async delete(id) {
    await deleteDoc(doc(this.db, 'products', id));
    return `Delete ${id} ok`;
  }
}
