import React from "react";
import './TodoFormBasicData.css'


function TodoFormBasicData(){

    return(

        <form className="formBasic">
           <span className="textBasic">NOMBRE</span><input className="name box"placeholder="Nombre Completo" type="text" />
           <span className="textBasic">CÉDULA</span><input className="Cedula box" placeholder="Cedula" type="number" />
           <span className="textBasic">DIRECCIÓN</span><input className="Address box" placeholder="Direccion" type="text"/>
           <span className="textBasic">CELULAR</span><input className="Phone box" placeholder="Celular" type="tel"/>


        </form>
    )
}

export {TodoFormBasicData};