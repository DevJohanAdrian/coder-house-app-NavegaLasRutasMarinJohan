import { useMemo, useEffect, useState } from "react";
import { CardArt } from "./CardArt";
import 'animate.css';
// Datos
// import {getPictureByCategory} from '../helpers' // se cambia d firebase
import { collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../../firebase/config";



export const CardGeneral = ({ category }) => {
  // const art = useMemo(()=> getPictureByCategory(category), [category]); // se cambia d firebase

const [art, setArt ] = useState([]);

  useEffect(() =>{

    const artref = collection (db, "Art");

    const q = query(artref, where("category", "==", category));

    getDocs (q).then((response) =>{
      // console.log(response.docs[0].id);
      // console.log(response.docs[0].data());
      setArt( response.docs.map((doc) =>{
        return {...doc.data(), id: doc.id}
      })
      )

    })

  }, [category]);
 
  return (
    <div className="container mt-5 animate__animated animate__fadeIn">

      <div className="row g-2">
        {art.map((item) => (
         <CardArt key={item.id}
         {...item} />
        ))}
      </div>


    </div>

  )
}

