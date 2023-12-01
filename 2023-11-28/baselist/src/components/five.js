// Naudojant masyvą dogs atvaizduoti skaičius, kurie yra lygūs žodžių masyve ilgiui. 
// Skaičius, didesnius nei 6 atvaizduoti žaliai, kitus raudonai.


export default function Five (){
    const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

    return (
        <>
            <div className="container">
                <h1>Penktas: </h1>
                <div className="container2">
                    {dogs.map((item, index) => {
                       
                        return (
                            <div className={item.length > 6 ? 'square' : 'circle'}>
                                <p>{item.length }</p>
                          
                            </div>
                        );
                    })}

         </div>
            </div>
        </>
    );
}