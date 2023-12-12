import { useState } from 'react';

export default function Creat({ setCreate }) {

    const [name, setName] = useState(''); //pradinis irassas tuscias

    const add = () => {
        setCreate(
            { name }
        );
        setName('')
    }

    return (
        <div className="card mt-5">
            <div className="card-body">
                <h5 className="card-title">Naujos sąskaitos sukūrimas</h5>
                <div className="form-floating mb-3">
                    <form >
                         <label for="floatingInput">Vardas Pavardė</label>
                        <input type="text"
                            className="form-control"
                            placeholder="Vardas Pavardė"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                       
                    </form>
                </div>
                <button type="button" onClick={add} className="btn btn-outline-primary">Add</button>

            </div>
        </div>
    )
} 
