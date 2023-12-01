import { useState } from "react";

export default function Password() {
  const everything =
    "ABCDEFGHIJKLMNOPRSTVWZabcdefghijklmnoprstvwz1234567890!@#$%^&*()_+=-{[}]:;~±§|/.,><";

  
  return (
    <>
      <div className="container">
        <p>Generated password:</p>
        <div >
          <input className="mb-3 row col-sm-5"/>
        </div>
          <div className="box">
            <label className="form-check-label col-sm-1 col-form-label ">
              Length: 
              <input
                className="length "
                type="number"
                name="length"
                max={20}
                min={1}
              />
            </label>
            <label className="form-check-label col-sm-1 col-form-label ">
              <input className="form-check-input  " type="checkbox" name="numbers" />
              Numbers
            </label>
            <label className="form-check-label ">
              <input className="form-check-input " type="checkbox" name="symbols" />
              Symbols
            </label >
          </div>
          <div >
            <button className="mt-3" type="submit">Generate</button>
          </div>
      
        <div className="list mt-3">
          <p>10 last generated passwords:</p>
          
          
        </div>
      </div>
    </>
  );
  }

