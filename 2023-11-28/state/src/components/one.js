import { useState } from "react";

// Sukurti aplikaciją, kuri turi mygtuką change ir atvaizduoja apskritimą. 
// Paspaudus mygtuką change apskritimas turi pavirsti į kvadratą, 
// o paspaudus dar kartą vėl pavirsti apskritimu.

export default function One() {
    const [shape, setShape] = useState(false)

    return (
        <div className="container">
            <div className={`box  ${shape ? 'circle' : 'square'}`}> </div>
            <button onClick={() => setShape(!shape)} className="btn">CHANGE</button>
        </div>
    )
}