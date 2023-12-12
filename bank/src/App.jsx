import Creat from './Components/Creat';
import List from './Components/List';
import Delete from './Components/Delete';
import Edit from './Components/Edit';
import './App.css';
import { useEffect, useState } from 'react';
import { read, store, destroy, lsUpdate } from './Components/ls';
import { v4 as uuidv4 } from 'uuid';

const KEY ='names';

function App() {
  const [create, setCreate] = useState(null);
  const [names, setNames] = useState([]);
  const [remove, setRemove]= useState(null);
  const [clear, setClear] = useState(null); 
  const [edit, setEdit] = useState(null);
  const [update, setUpdate]= useState(null)
 
  

useEffect(()=>{
  setTimeout(()=>{
  setNames(read(KEY))
  },1000 )
  console.log(read(KEY))
},[]);

  
useEffect(()=>{
  if(null===create){
    return;
  }
  const id = store(KEY,create)
  setNames(c => [{ ...create, id }, ...c]);
  }, [create]);


useEffect(_ =>{
  if (null === clear){
    return;
  }
  console.log(clear.id)
  destroy(KEY, clear.id)
  setNames(c => c.filter(name => name.id !== clear.id));
  setClear(null);
    setRemove(null);
},[clear]);

useEffect ( _ =>{
  if(null=== update){
    return
  }
  lsUpdate(KEY, update.id, update)
  setNames(c => c.map(name=>name.id === update.id ? { ...name } : name));
  setUpdate(null)
  setEdit(null);
},[update])


  return (

  
        <div className="container">
          <div className='row'>
            <div className='col-5'>
              <Creat setCreate={setCreate}/>
      
            </div>
            <div className='col-7'>
            <List names={names} setRemove={setRemove} setUpdate={setUpdate}  setEdit={setEdit}  edit={edit} />
            </div>
          </div>
          <Delete remove={remove} setRemove={setRemove} setClear={setClear}/>
       
        </div>
    
  
  );
}

export default App;
