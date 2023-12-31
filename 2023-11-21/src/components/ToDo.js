import { useState } from 'react';

export default () => {
    const [data, setData] = useState([]);
    const [edit, setEdit] = useState(false);
    const [value, setValue] = useState(false);

    // console.log(data);
    const handleSubmit = (e) => {
        e.preventDefault();

        // tuscio stringo nebegalima prideti
        if(e.target[0].value === '')
            return;

        setData([...data, {
            value: e.target[0].value,
            status: false
        }]);
    }

    const setStatus = (index) => {
        data[index].status = !data[index].status;

        setData([...data]);
        // console.log(data);
    }
// istrynimo mygtukas
    const handleDelete = (index) => {
        data.splice(index, 1);
        setValue([...data]);
    }

    // edit mygtukas su redagavimu
    const handleEdit = (index, text) => {
        if(typeof edit === 'number') {
            data[index].value = value; 
            setData([...data]);
        } else { 
            setEdit(index);
            setValue(text);
        }
    }

    return (
        <>
            <form
                className="input-group"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter new Task"/>

                <button className="btn btn-success">Enter</button>

            </form>
            {data.map((val, index) => 
                <li key={index}
                    style={{textDecoration: val.status && 'line-through'}}
                    className="py-3 gap-3 border-bottom d-flex justify-content-between align-items-center">

                    {typeof edit === 'number' && edit === index ? 
                        <input
                            type="text" 
                            className="form-control"
                            value={value}
                            onChange={(e) => {setValue(e.target.value)}}/>
                    :
                        <span onClick={() => setStatus(index)}>{val.value}</span>
                    }

                    <div className="d-flex gap-2">
                        <button 
                            className="btn btn-warning"
                            onClick={() => {handleEdit(index, val.value)}}>Edit</button>

                        <button 
                            className="btn btn-danger"
                            onClick={() => {handleDelete(index)}}>Delete</button>
                    </div>
                </li>
            )}
        </>
    );
}   

