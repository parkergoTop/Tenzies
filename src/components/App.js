import React from "react";
import "../style.css"
import Dice from "./Dice"
import {nanoid} from "nanoid"

export default function App(){

   function allNewDice(){
     const newDice = [];
   
     for(let i=0; i <10; i++){
        newDice.push({value: Math.floor(Math.random()*6+1), isHeld:true, id:nanoid()});
     }
     return newDice;
   
   }
   
   const [dices, setDices] = React.useState(allNewDice());
   console.log(dices)

 
     /*Update the `rollDice` function to not just roll
       all new dice, but instead to look through the existing dice
       to NOT role any that are being `held` */
    function rollDice(){
      setDices(preState => preState.map(element => {return element.isHeld? element : {...element, value: Math.floor(Math.random()*6+1) }}));
    }
    
    function holdDice(id){
      setDices(preState => preState.map(element =>  {
                                             return  element.id ===id?{...element, isHeld: !element.isHeld} : element}))
    }

    return(
         <main className = "main-box">
              <div className="game-box"> 
                   <div className="dice-container">
                      {dices.map(element =>
                         {
                           return <Dice 
                                       key={element.id}
                                       id={element.id}
                                       value={element.value} 
                                       isHeld={element.isHeld}
                                       holdDice={() => holdDice(element.id)}/>
                         })}
                  </div>
                  <button className="roll-button" onClick={rollDice}>Roll</button >

             </div>

         </main>)
}