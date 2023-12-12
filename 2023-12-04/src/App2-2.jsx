import { useState } from 'react';
import './App.scss';
import './button.scss';
import Square from './Components/042/Square';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [plusCounter, setPlusCounter] = useState(0);

  const plus = _ => {
    setPlusCounter(c => c + 1) //redagavimas
  }
  const reset = _ => {
    setPlusCounter(0)  //priskyrimas
  }

  const [squares, setSquares] = useState([]);
  const add = () => {
    setSquares(s => [{ count: 0, id: uuidv4() }, ...s]);
  }

  const plusOne = square => {
    setSquares(s => s.map(sq => sq.id === square.id ? { ...sq, count: sq.count + 1 } : { ...sq }))

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter:{plusCounter}</h1>
        <p>This is a React</p>
        <div className="sq-bin">
          {
            squares.map(s => <Square key={s.id} square={s} plusOne={plusOne} />)
          }
        </div>
        <div className="sq-bin">
          <button className="pink" onClick={add} >Add One Square</button>
          <button className="blue" onClick={plus}>+1</button>
          <button className="blue" onClick={reset}>reset</button>
        </div>
      </header>
    </div>
  );
}

export default App;