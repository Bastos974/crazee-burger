import { useState } from "react";

function App(){

// State Etat Donnée
const [number,setnumber]=useState(0)

// Comporetement
const handleClick = () => {
    setnumber(number+1)
}
const handleClick2 = () => {
    setnumber(number-1)
}

// Affichage (rerender)
return <div>
    <h1>compteur</h1>
    <button onClick={handleClick}> + </button>
    <h2>{number}</h2>
    <button onClick={handleClick2}> - </button>
    
</div>



}
export default App;

