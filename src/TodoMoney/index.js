import React from "react";
import './TodoMoney.css'

function TodoMoney(){

   
    return(

        <form className="formQuatity" id="formQuatity">
          
          <div className="sectionMoney" id="boxQuatity">
               <p className="numberQuatity"></p>

           <div className="oneQuatity">
               <span className="textBasic">ABONO</span>
                    <input className="boxMeasure"placeholder="Abono" type="number" />
          </div>
          <div className="oneQuatity">
               <span className="textBasic">SALDO</span>
                    <input className="boxMeasure" placeholder="Saldo" type="number" />
           </div>
          </div>
        </form>
    )
}

export {TodoMoney};