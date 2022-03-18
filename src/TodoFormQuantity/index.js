import React from "react";
import './TodoFormQuantity.css'

function TodoFormQuantity({quantity,arrayQuatity}){

    //console.log(quantity)

    
    const posicion = arrayQuatity.length;
    console.log(posicion)

    return(

        <form className="formQuatity" id="formQuatity">
          
          <div className="sectionQuatity" id="boxQuatity">
               <p className="numberQuatity"></p>

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