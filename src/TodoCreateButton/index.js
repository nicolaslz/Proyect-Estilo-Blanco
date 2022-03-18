import React from "react";
import './TodoCreateButton.css'


function TodoCreateButton({quantity, setQuantity,on,setOn}){


    if (quantity => 1){


        if (on === 1) //restar

        {
            const nodeRemove = document.getElementById('formQuatity').
            querySelectorAll('div .sectionQuatity'); //obtener el form y los div
            const arrayRemove = [...nodeRemove]
            const elementRemove = arrayRemove.pop(); 
            elementRemove.parentNode.removeChild(elementRemove);
            console.log('elimine')
        }

        if (on === 2) // sumar 
        {
            const Intert = document.getElementById('boxQuatity'); //obteniendo del div interno
            var newClone = Intert.cloneNode(true); // copia del DIV
            const node = document.getElementById('formQuatity'); //obtener el form
            node.append(newClone); //pegar en el form
        console.log('agrege')
        }

}


   // const [quantity, setQuantity] = React.useState(1)
   
    return(   

    <div className="quantity">
        <button 
                className="StyleButton"
                id="22"
                onClick={() => {
                     setQuantity(quantity - 1);
                     setOn(on = 1);
    
                }}

                disabled ={quantity <= 1}
        > 
            - 
        </button>

        <p className="styleQuantity"> {quantity} </p>

        <button 
                className="StyleButton"
                onClick={() => {
                    setQuantity(quantity + 1);
                    setOn(on = 2);
         
                }}
        > 
            + 
        </button>

    </div>
    )
}

export {TodoCreateButton};