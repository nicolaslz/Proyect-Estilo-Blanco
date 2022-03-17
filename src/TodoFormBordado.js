import React from "react";

function TodoFormBordado(){

    return(

        <form className="formBasic">
       
           <span className="textBasic">BORDADO</span>
                <input className="embroidery box" placeholder="Universidad, Empresa, Logo, Otros" type="text"/>
          
           <span className="textBasic">BORDADO PERSONALIZADO</span>
                <input className="customEmbroidery box" placeholder="Nombre a personalizar" type="text"/>


        </form>
    )
}

export {TodoFormBordado};