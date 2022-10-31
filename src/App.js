import { async } from "@firebase/util";
import { collection, getDocs } from "firebase/firestore"; 
import { useEffect } from "react";
import db from "./firebase/firebaseConfig";

function App() {
  
  useEffect(() => {
    
    const obtenerDatos = async() =>{
      const datos = await getDocs(collection(db,'usuarios'));
      // console.log(datos.docs[0].data());
      datos.forEach((documento)=>{
        console.log(documento.data());
      })
    }

    obtenerDatos();

  }, [])
  
  
  return (
    <div>
      <h1>FIREBASE</h1>
    </div>
  );
}

export default App;
