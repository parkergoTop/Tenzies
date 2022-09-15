import React from "react";
import "../style.css"
import Dice from "./Dice"

export default function App(){

   function allNewDice(){
     const newDice = [];
     for(let i=0; i <10; i++){
        newDice.push(Math.floor(Math.random()*6+1))
     }
     return newDice;
   
   }
   
   const [dices, setDices] = React.useState(allNewDice());
   console.log(dices)

 
   
    
    return(
         <main className = "main-box">
              <div className="game-box"> 
              <div className="dice-container">
                   {dices.map(element =>
                      {
                       return <Dice value={element} />
                      })}
                  </div>
             </div>

         </main>)
}