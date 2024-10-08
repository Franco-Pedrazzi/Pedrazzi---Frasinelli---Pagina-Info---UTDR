import React, { useState, useEffect } from 'react';
import './index.css';
import titulo from './files/Images/Titulo.png';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore"; // Importa Firestore

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCYtBDunaKO3hcWAntdmRty8N3dFGKvhVA",
  authDomain: "usuarios-ff69d.firebaseapp.com",
  databaseURL: "https://usuarios-ff69d-default-rtdb.firebaseio.com",
  projectId: "usuarios-ff69d",
  storageBucket: "usuarios-ff69d.appspot.com",
  messagingSenderId: "63150293141",
  appId: "1:63150293141:web:33f299369773f46eef9b9c",
  measurementId: "G-7MVQ1N4MZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Inicializa Firestore

function App () {
  const [docData, setDocData] = useState(null);

  useEffect(async () => {
    const docRef = doc(db, "Annoying dog", "TB"); // Ruta a la colección y documento
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setDocData(docSnap.data()); // Almacena los datos en el estado
      console.log("Document data:", docSnap.data()); // Verifica los datos en consola
    } else {
      console.log("No such document!");
    }
  }, []);

  return (
    <div>
      <nav>
        <div className='button'>Undertale</div>
        <div className='button'>Deltarune</div>
      </nav>
      <center>
        <img src={titulo} alt="Titulo" />
        <p>by toby fox</p>
        {/* {docData ? (
          <div>
            <p>Be careful: {docData["Be careful"]}</p>
            <p>OMG: {docData.OMG}</p>
          </div>
        ) : (
          <p>Loading data...</p>
        )} */}
      </center>
    </div>
  );
};

export default App;