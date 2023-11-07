import React from "react";
import { CardArt } from "./CardArt";
import "../css/card.css";
import {getPictureByCategory} from '../helpers'



export const CardGeneral = ({ category }) => {
  const art = getPictureByCategory(category); 

  return (
    <div className="container d-flex justify-content-around flex-column  align-items-center h-100 mt-5">

      <div className="row">
        {art.map((item) => (
         <CardArt key={item.id}
         {...item} />
        ))}
      </div>


    </div>



    // <>
    //  <div>{props.msg}</div>
    // </>
  )
}

