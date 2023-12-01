import './Calculator.css';
import { useState } from 'react';


function Calculator() {
  const symbols =[ 'C', '7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '/', '=','0'];

  const [value, setValue] = useState('');
  const [output, setOutput] = useState('');

  

    return (
        <div className='calculator'>
            <div>
                <h1 className='display-flex text-center'>Skaičiuotuvas</h1>
                <hr />
            </div>
            <div className='w-50 m-2 mx-auto py-5'>
                <input placeholder={value} value={output}  className='p-3 w-100'/>
                {symbols.map((symbol) => (
                  
          <button
            key={symbol}
            className='btn btn-light'
            onClick={() => {
                if (symbol === 'C') {
                  setOutput('');
                  setValue('');
                  
                } else if (symbol === '+') {
                  setValue(symbol );
                  
                } 
            }}
          >
            {symbol}
          </button>
        ))}
      </div>
    </div>
  );
          }

export default Calculator;