import React from "react";
import './TodoCreateButton.css'


function TodoCreateButton({quantity, setQuantity}){

    
   // const [quantity, setQuantity] = React.useState(1)
   
    return(   

    <div className="quantity">
        <button 
                className="StyleButton"
                onClick={() => {
                    setQuantity(quantity - 1);
                    
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
                }}
        > 
            + 
        </button>

    </div>

    )
}

export {TodoCreateButton};