// Atvaizduoti masyvą dogs. Kiekvienas šuo atskirame kvadrate.


export default function One (){
    const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

    return (
        <>
            <div className="container">
                <h1>Pirmas: </h1>
                <div className="container2">
                    {dogs.map((item, index) => {
                        return (
                            <div className="square" key={index}>
                                <p>{item}</p>
                            </div>
                        );
                    })}

         </div>
            </div>
        </>
    );
}