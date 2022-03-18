import React from "react";
import './TodoFormMeasures.css'

function TodoFormMeasures(){

    return(

        <form className="formMeasure">
           
           <div className="SectionMesuare">
           
               <div className="oneMeasure">
                    <span className="textMeasure">ESPALDA</span>
                         <input className="boxMeasure"placeholder="---" type="number" />
               </div>
               <div className="oneMeasure">    
                    <span className="textMeasure">PECHO</span>
                         <input className="boxMeasure" placeholder="---" type="number" />
               </div>
               <div className="oneMeasure">     
                    <span className="textMeasure">CINTURA</span>
                         <input className="boxMeasure" placeholder="---" type="number"/>
               </div>
               <div className="oneMeasure">    
                    <span className="textMeasure">CADERA</span>
                         <input className="boxMeasure" placeholder="---" type="number"/>
               </div>
               <div className="oneMeasure">
                    <span className="textMeasure">LARGO BLUSA</span>
                         <input className="boxMeasure" placeholder="---" type="number"/>
               </div>
               <div className="oneMeasure">    
                    <span className="textMeasure">LARGO PANTALÓN</span>
                         <input className="boxMeasure"placeholder="---" type="number" />
               </div>
               <div className="oneMeasure">
                    <span className="textMeasure">PIERNA</span>
                         <input className="boxMeasure"placeholder="---" type="number" />
               </div>
               <div className="oneMeasure"> 
                    <span className="textMeasure">BOTA</span>
                         <input className="boxMeasure" placeholder="---" type="number" />
               </div>
               <div className="oneMeasure">
                    <span className="textMeasure">BRAZO</span>
                         <input className="boxMeasure" placeholder="---" type="number"/>
               </div>
               <div className="oneMeasure">
                    <span className="textMeasure">LARGO BATA</span>
                         <input className="boxMeasure" placeholder="---" type="number" />
               </div>
               <div className="oneMeasure">
                    <span className="textMeasure">MANGA BATA</span>
                         <input className="boxMeasure" placeholder="---" type="number"/>
               </div>     
          </div>

        </form>
    )
}

export {TodoFormMeasures};


// espalda, pecho, cintura, cadera, pierna, bota, brao, largo blusa, largo pantalon, largo bata, manga bata