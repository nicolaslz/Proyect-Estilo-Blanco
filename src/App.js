import React from 'react';

import {TodoTitle} from "./TodoTitle";
import {TodoFormBasicData} from "./TodoFormBasicData";
import {TodoTitle2} from "./TodoTitle2";
import {TodoCreateButton} from "./TodoCreateButton";
import {TodoFormQuantity} from "./TodoFormQuantity";
import {TodoTitle4} from "./TodoTitle4";
import {TodoFormBordado} from "./TodoFormBordado";
import {TodoTitle3} from "./TodoTitle3";
import {TodoFormMeasures} from "./TodoFormMeasures";

import {TodoCreateButtonregister} from "./TodoCreateButtonregister";


// import './App.css';

const colorListen=[
  {Number: 194030, completed:true},
  {Number: 194835, completed:false},
  {Number: 193933, completed:false}
];

function App() {

  const [quantity, setQuantity] = React.useState(1);

  // crear un array desde un elemento 

  const arrayQuatity = Array.from({length: quantity}, (v, i) => i);
   
   if (arrayQuatity){
    console.log(arrayQuatity);
    console.log(quantity)
 
   }
   
    

  return (
    
    <React.Fragment>

      <TodoTitle />
      
      <TodoFormBasicData />

      <TodoTitle2 />

      <TodoCreateButton 
       quantity ={quantity}
       setQuantity ={setQuantity}
      />

      {/* <modal> */}

        <TodoFormQuantity
              quantity = {quantity}
              arrayQuatity ={arrayQuatity}
        />

      {/* </modal> */}
      <TodoTitle4 />

      <TodoFormBordado />

      <TodoTitle3 />

      <TodoFormMeasures />

      <TodoCreateButtonregister />
    
    </React.Fragment>
  );
}

export default App;
