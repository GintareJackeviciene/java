// Atvaizduoti masyvą dogs. Kiekvienas šuo atskirame apskritime. 
// Šunys turi būti išrūšiuoti nuo ilgiausio žodžio iki trumpiausio, 
// o apskritimai sunumeruoti nuo 1 iki galo.


export default function Two (){
    const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

    return (
        <>
            <div className="container">
                <h1>Antras: </h1>
                <div className="container2">
                    {dogs.sort((a,b)=>b.length - a.length).map((item, index) => {
                        return (
                            <div className="circle" key={index}>
                                <p>{index + 1 +'-'}</p>
                                <p>{item}</p>
                                
                            </div>
                        );
                    })}

         </div>
            </div>
        </>
    );
}
