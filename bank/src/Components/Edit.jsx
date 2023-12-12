// import { useEffect, useState } from "react";


// export default function Edit({edit, setEdit, setUpdate }) {

//     const [name, setName] = useState();

//     useEffect(() => {
//         if (edit) {
//             setName(edit.name);
//         }
//     }, [edit]);



//     const save = (e) => {
   
//         setUpdate({ ...edit, name })
//         setEdit(null)

//     }

//     // const save2 = () => {
//     //     setUpdate({ ...edit, name })
//     //     setEdit(null)

//     // }


//     if (null === edit) {
//         return null;
//     }
//     return (
        
//                             <div className="modal-footer" >
//                                 <button onClick={_ => setEdit(null)} type="button" className="btn btn-secondary">Cancel</button>
//                                 <button onClick={save} type="button" className="btn btn-outline-info  mt-2">Pridėti</button>
//                                 <button className="btn btn-outline-success  mt-2">Nuskaičiuoti lėšas</button>
//                             </div>


                  
            
           
        
//     )
// }