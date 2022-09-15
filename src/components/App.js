import React from "react";
import "../style.css"
import Dice from "./Dice"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"


export default function App(){

   function allNewDice(){
     const newDice = [];
   
     for(let i=0; i <10; i++){
        newDice.push({value: Math.floor(Math.random()*6+1), isHeld:false, id:nanoid()});
     }
     return newDice;
   
   }
   
   const [dices, setDices] = React.useState(allNewDice());
   console.log(dices)

   const[tenzies, setTenzies] = React.useState(false)

   React.useEffect( () => {
     // if all dices are held 
     // all dice have the same value 
     // you won 

     if(dices.every(element => element.isHeld && element.value===dices[0].value)){
      setTenzies(true)
      //If tenzies is true, use the "react-confetti" package to render the <Confetti /> component
      
     }
     

  } , [dices])

 
     /*Update the `rollDice` function to not just roll
       all new dice, but instead to look through the existing dice
       to NOT role any that are being `held` */
    function rollDice(){
      if(tenzies){
        setDices(allNewDice())
        setTenzies(false)
      } else{
        setDices(preState => preState.map(element => {return element.isHeld? element : {...element, value: Math.floor(Math.random()*6+1) }}));
      }
    }
    
    function holdDice(id){
      setDices(preState => preState.map(element =>  {
                                             return  element.id ===id?{...element, isHeld: !element.isHeld} : element}))
    }

    return(
         <main className = "main-box">
            {tenzies && <Confetti />} 
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
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
                  <button className="roll-button" onClick={rollDice}>{tenzies ? "New game" : "Roll"}</button >

             </div>

         </main>)
}