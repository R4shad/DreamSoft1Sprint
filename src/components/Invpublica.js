import React from 'react';
import '../styles sheet/invpub.css'

import { useState,useEffect } from 'react';
import { app, db } from "../Firebase/ConexionBD";
import { doc, setDoc,getDocs,  collection, getDoc} from "firebase/firestore";
import { async } from '@firebase/util';

    

/*
    const [archivoUrl, setArchivoUrl] = React.useState("");
    const [docus, setDocus] = React.useState([]);
 React.useEffect(async()=>{
    const docusList= await app.firestore().collection("Campeonato1").get();
    setDocus(docusList.docs.map((doc)=>doc.data()));
 },[])  */
    /*function recuperar(inv){
        linkImag=inv;
        return inv;
        
    }*/

   /* const [stringImage, setstringImage] = useState('');
  useEffect(() => {
    async function obtenerImag() {

      const docRef = doc(db, "Campeonato1", "OKfiQOn7WhvKSck3A4Tf");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("si entra al exist", docSnap.data());
        var invPublica = docSnap.data().invitacion;
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
      
      setstringImage(invPublica)
      console.log(stringImage, "Funcionaaaa");
    }
    obtenerImag();
  }, []);*/

/*
  export const useData = (collectionName) => {
    const [docs, setDocs] = useState([]);
    useEffect(() => {
      const unsub = db.collection(collectionName)
        .onSnapshot(snap => {
          const documents = [];
          snap.forEach(doc => {
            documents.push({ id: doc.id, ...doc.data() })
          });
          setDocs(documents);
        });
      // Limpiar el componente
      return () => unsub();
    }, [collectionName]);
    return { docs }
  }*/

/*
  const docRef = doc(db, "Campeonato1", "OKfiQOn7WhvKSck3A4Tf");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        //console.log("si entra al exist", docSnap.data());
       var invitacionPublica = docSnap.data().invitacion;

 console.log(linkImag,"VVVV2222222");
 
*/

const Invpublica = () =>{
/*async function obtenerImag() {
      const docRef = doc(db, "Campeonato1", "OKfiQOn7WhvKSck3A4Tf");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        //console.log("si entra al exist", docSnap.data());
       var invitacionPublica = docSnap.data().invitacion;
        //linkImag= docSnap.data().invitacion;
        //recuperar(invitacionPublica);
        linkImag=invitacionPublica;
        console.log(linkImag,"Si fuunc")

      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    obtenerImag();
*/

const [imageInvPub, setstringImage] = useState('');
  useEffect(() => {
    async function obtenerImag() {
      const docRef = doc(db, "Campeonato1", "OKfiQOn7WhvKSck3A4Tf");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("si entra al exist", docSnap.data());
        var invitacionPublica = docSnap.data().invitacion;
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
     // console.log("Urls",invitacionPublica);
      var imageInvi = "";
      imageInvi=invitacionPublica;
      setstringImage(imageInvi)
      //console.log("Si daaaaaa", imageInvPub);
    }
    obtenerImag();
  }, []);


    return (
        <div className= 'inv-publica'>
            <div className='texto-inv'>
                <h2>INVITACIÓN PÚBLICA</h2>
            </div>
            <img 
                className="img-thumbnail mx-auto d-block imagen-invi"
                
                src ={imageInvPub}
            />
            
            
        </div>
    );
}

export default Invpublica;