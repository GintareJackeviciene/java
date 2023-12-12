// Sukurti aplikaciją, kuri turi mygtukus plus ir minus,
//  bei atvaizduoja skaičių 0. Paspaudus plus mygtuką, 
// skaičius padidėja 1, o paspaudus minus- sumažėja 3


import { useState } from "react";

export default function Three() {
 
const [number, setNumber]= useState(0)

    return (
        <div className="container">
            <div className="box "
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: 'white'
              }}>{number} </div>
            <button onClick={() =>setNumber(number+1)} className="btn">PLUS</button>
            <button onClick={()=> setNumber(number-3)} className="btn">MINUS</button>
        </div>
    )
}