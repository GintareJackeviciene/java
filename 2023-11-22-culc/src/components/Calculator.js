import './Calculator.css';
import { useState } from 'react';

function Calculator() {

  const [val, setValue] = useState("")


  const calculate = () => { setValue(eval(val)) }

  const clear = () => {
    setValue("")

  }
  return (
    <div className='calculator'>
      <div>
        <h1 className='display-flex text-center'>CALCULATOR</h1>
        <hr />
      </div>
      <div className='border p-3 w-50 m-5 mx-auto'>
        <input placeholder='0' className='p-2 w-100' value={val} />
        <div className='row py-3'>
          <button className='col-3 py-2 border-1' onClick={(e) => setValue(val + e.target.value)} value="1">1</button>
          <button className='col-3 py-2 border-1' onClick={(e) => setValue(val + e.target.value)} value="2">2</button>
          <button className='col-3 py-2 border-1' onClick={(e) => setValue(val + e.target.value)} value="3">3</button>
          <button className='col-3 py-2 border-1' onClick={(e) => setValue(val + e.target.value)} value="4">4</button>
          <button className='col-3 py-2 border-1' onClick={(e) => setValue(val + e.target.value)} value="5">5</button>
          <button className='col-3 py-2 border-1' onClick={(e) => setValue(val + e.target.value)} value="6">6</button>
          <button className='col-3 py-2 border-1' onClick={(e) => setValue(val + e.target.value)} value="7">7</button>
          <button className='col-3 py-2 border-1' onClick={(e) => setValue(val + e.target.value)} value="8">8</button>
          <button className='col-3 py-2 border-1' onClick={(e) => setValue(val + e.target.value)} value="9">9</button>
          <button className='col-3 py-2 border-1' onClick={(e) => setValue(val + e.target.value)} value="0">0</button>
          <button className='col-3 py-2 border-1' onClick={() => calculate()} value="=">=</button>
          <button className='col-3 py-2 border-1' onClick={(e) => setValue(val + e.target.value)} value="+">+</button>
          <button className='col-3 py-2 border-1' onClick={(e) => setValue(val + e.target.value)} value="-">-</button>
          <button className='col-3 py-2 border-1' onClick={(e) => setValue(val + e.target.value)} value="*">*</button>
          <button className='col-3 py-2 border-1' onClick={(e) => setValue(val + e.target.value)} value="/">/</button>
          <button className='col-3 py-2 border-1' onClick={() => { clear() }} value="C">C</button>

        </div>
      </div>

      {/* <div className='w-50 m-5 mx-auto py-5'>
        <input placeholder='0'  className='p-2 w-100'/>
     
          <button className='btn btn-ligth'>C</button>
          <button className='btn btn-ligth'>7</button>
          <button className='btn btn-ligth'>8</button>
          <button className='btn btn-ligth'>9</button>
          <button className='btn btn-ligth'>+</button>
          <button className='btn btn-ligth'>4</button>
          <button className='btn btn-ligth'>5</button>
          <button className='btn btn-ligth'>6</button>
          <button className='btn btn-ligth'>-</button>
          <button className='btn btn-ligth'>1</button>
          <button className='btn btn-ligth'>2</button>
          <button className='btn btn-ligth'>3</button>
          <button className='btn btn-ligth'>*</button>
          <button className='btn btn-ligth'>/</button>
          <button className='btn btn-ligth'>=</button>
          <button className='btn btn-ligth'>0</button>
         </div> */}
    </div>

  
  );
}

export default Calculator;
