// Sukurti aplikaciją, kuri turi mygtuką add, 
// kurį paspaudus vieną kartą atsiranda mėlynas kvadratas, 
// paspaudus dar kartą- dar vienas ir t.t.
import { useState } from "react";

export default function Four() {
 
const [square, setSquare]= useState([])


    return (
        <div className="container">
            <div className="box2 ">
            <div>{square.map((el, index)=>{
                return <div className="box" key ={index}>{el}</div>
            })}
            </div>
            <button onClick={() => setSquare([...square,''])} className="btn">ADD</button>
           
            </div>
            
        </div>
    )
}