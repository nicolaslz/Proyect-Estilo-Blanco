import React from "react";
import './TodoFormQuantity.css'

function TodoFormQuantity({quantity,arrayQuatity}){

    //console.log(quantity)

    const posicion = arrayQuatity[0];

    return(

        <form className="formQuatity">
          
          <div className="sectionQuatity">
               <p className="numberQuatity">{posicion})</p>

           <div className="oneQuatity">
               <span className="textBasic">COLOR PRINCIPAL</span>
                    <input className="boxMeasure"placeholder="Principal" type="number" />
          </div>
          <div className="oneQuatity">
               <span className="textBasic">COLOR SESGO</span>
                    <input className="boxMeasure" placeholder="Sesgo" type="number" />
           </div>
          </div>
        </form>
    )
}

export {TodoFormQuantity};