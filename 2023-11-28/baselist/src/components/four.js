// Atvaizduoti masyvą dogs. Šunis, kurie prasideda didžiąja raide praleisti (neatvaizduoti).


export default function Four (){
    const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

    return (
        <>
            <div className="container">
                <h1>Ketvirtas: </h1>
                <div className="container2">
                    {dogs.map((item, index) => {
                        // patikrinam ar pirmoji raide madzioji
                        if(item.charAt(0) === item.charAt(0).toLocaleLowerCase()){
                           return (
                            <div className="square" key={index}>
                                <p>{item}</p>
                            </div>
                        ); 
                        }
                        
                    })}

         </div>
            </div>
        </>
    );
}
