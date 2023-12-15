import { useState } from "react";

export const Form = () => {

    const [ugis, setUgis] = useState("");
    const [svoris, setSvoris] = useState(0);
    const [rezultatas, setRezultatas] = useState(null);


    const handleKMI = (e) => {
        e.preventDefault()
    };

    return (

        <div 
        style ={{ marginLeft: "100px",marginTop: "50px" }}>
            <h1>KMI (kūno masės indekso) skaičiuotuvas :</h1>
            <form>
                <label  htmlFor="ugis"><h2>Ūgis metrais:</h2></label>
                <input               
                    id="ugis"
                    type="number"
                    input
                    className=""
                    placeholder="Ūgis"
                    value={ugis}
                    onChange={(e) => setUgis(e.target.value)}
                ></input>
                <label style ={{marginLeft: "10px"}} htmlFor="Svoris"><h2>Svoris kilogramais:</h2></label>
                <input
                    id="svoris"
                    type="number"
                    input
                    className=""
                    placeholder="svoris"
                    value={svoris}
                    onChange={(e) => setSvoris(e.target.value)}
                ></input>
               <div style ={{marginTop: "10px"}}> <button
                style ={{marginLeft: "10px"}}
                    className=""
                    onClick={(e) => {
                        e.preventDefault();
                        const rez = svoris / (ugis * ugis);
                        setRezultatas(rez.toFixed(2));
                    }}
                >
                    Skaičiuoti KMI
                </button>
                </div>
                <div className="rezultatas">
                    {rezultatas && (
                        <>
                        <h2>Jūs sveriate : {svoris} kg</h2>
                        <h2>Jūsų ūgis : {ugis} </h2>
                            <h2 style= {
                                +rezultatas < 18.85 ? { color: "#dbdf1f" } :  
                                +rezultatas > 18.85 && +rezultatas < 25 ? { color: "#3bcf43" } 
                                : {color: "crimson"}
                            }
                            >
                               Jūsų KMI yra {rezultatas}
                            </h2>
                            {+rezultatas < 18.5 ? (
                            <h2>Jūsų svoris yra nepakankamas</h2>
                            ) : +rezultatas > 18.5 && +rezultatas  < 25 ? (
                            <h2>Jūsų svoris normalus</h2>) : (
                            <h2>Jūsų svoris per didelis</h2>)}
                            <button
                                onClick={() => {
                                    setRezultatas(null);
                                    setUgis(0);
                                    setSvoris(0);
                                }}
                            >
                                Reset
                            </button>
                        </>
                    )}
                </div>
            </form >
        </div >
    );
}