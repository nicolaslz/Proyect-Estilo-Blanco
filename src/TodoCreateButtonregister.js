import React from "react";
import "./TodoCreateButtonregister.css"



function TodoCreateButtonregister(){
   
    return(   

    <div className="register">
        <button 
                className="StyleButtonRegister"
                onClick={() => window.alert("REGISTRASTE UN CLIENTE ") }
        > 
            REGISTRAR CLIENTE
        </button>

    </div>

    )
}

export {TodoCreateButtonregister};