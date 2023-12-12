import { useState, useEffect } from "react";


export default function List({ names, setRemove, setUpdate, edit, setEdit }) {

    const [number, setNumber] = useState(() => {
        const storedNumber = localStorage.getItem("number");
        return storedNumber ? JSON.parse(storedNumber) : {};
    });

    const [inputValues, setInputValues] = useState({});

    const handleInputChange = (e, id) => {
        e.preventDefault();
        setInputValues((prevInputValues) => ({
            ...prevInputValues,
            [id]: e.target.value,
        }));
    };


    const handlePlus = (e, id) => {
        e.preventDefault();
        const inputValueAsNumber = parseFloat(inputValues[id]) || 0;
    
        setNumber((prevNumber) => ({
            ...prevNumber,
            [id]: (prevNumber[id] || 0) + inputValueAsNumber,
        }));
    
        setInputValues((prevInputValues) => ({
            ...prevInputValues,
            [id]: "",  // Nusinulinti įvesties lauką
        }));
    };
    
    const handleMinus = (e, id) => {
        e.preventDefault();
        const inputValueAsNumber = parseFloat(inputValues[id]) || 0;
    
        setNumber((prevNumber) => ({
            ...prevNumber,
            [id]: (prevNumber[id] || 0) - inputValueAsNumber,
        }));
    
        setInputValues((prevInputValues) => ({
            ...prevInputValues,
            [id]: "",  // Nusinulinti įvesties lauką
        }));
    };
    useEffect(() => {
        localStorage.setItem("number", JSON.stringify(number));
    }, [number]);

    return (
        <div className="card mt-5">
            <div className="card-body">
                <h5 className="card-title">Sąskaitų sąrašas</h5>
                <ul className="list-group">
                    {names === null && <li className="list-group-item">Loading...</li>}

                    {names !== null && !names.length && <li className="list-group-item">Nieko nėra sąraše</li>}
                    {names !== null && names.length !== 0 &&
                        names
                            .sort((a, b) => (a.name && b.name) ? a.name.toUpperCase().localeCompare(b.name.toUpperCase()) : 0)
                            .map(name => (
                                <li key={name.id} className="list-group-item">
                                    <div className="name-list" >
                                        <div className="name">
                                            {name.name}
                                            <button
                                                onClick={_ => setRemove(name)}
                                                className="btn btn-danger float-end m-1 mb-2">IŠTRINTI
                                            </button>
                                            <p>Sąskaitos balansas: {number[name.id] || 0} $</p>
                                        </div>
                                        <div>
                                            <input
                                                type="number"
                                                value={inputValues[name.id] || ""}
                                                onChange={(e) => handleInputChange(e, name.id)}
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            onClick={(e) => { handlePlus(e, name.id) }}
                                            className="btn btn-outline-info float-start  mt-2">Pridėti lėšų</button>
                                        <button
                                            type="submit"
                                            onClick={(e) => { handleMinus(e, name.id) }}
                                            className="btn btn-outline-success float-start mt-2">Nuskaičiuoti lėšas</button>
                                    </div>
                                </li>
                            ))
                    }
                </ul>
            </div>
        </div>
    );
}