// Sukurti aplikaciją, kuri turi mygtukus change ir random 
// bei atvaizduoja apskritimą su random skaičiumi viduje. 
// Paspaudus change mygtuką apskritimas keičiasi į stačiakampį 
// kaip pirmame uždavinyje, o paspaudus random mygtuką, 
// skaičius pasikeičia į rand 5 - 25
import { useState } from "react";



export default function Two() {
    const [shape, setShape] = useState(true)
const [number, setNumber]= useState()

const rand=(min, max)=>{;
min=Math.ceil(min);
max=Math.floor(max);
return Math.floor(Math.random()*(max-min+1) +min);
}
const keiciam=()=>{
    setNumber(rand(5,25))
}
    return (
        <div className="container">
            <div className={`box  ${shape ? 'circle' : 'square'}`}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >{number} </div>
            <button onClick={() => setShape(!shape)} className="btn">CHANGE</button>
            <button onClick={keiciam} className="btn">RANDOM</button>
        </div>
    )
}