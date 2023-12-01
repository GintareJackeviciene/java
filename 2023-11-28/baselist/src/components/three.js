// Atvaizduoti masyvą dogs. Poriniuose indeksuose esančius šunis atvaizduoti 
// kvadratuose, neporinius apskritime.

export default function Three (){
    const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];
    console.log(dogs)

    return (
        <>
            <div className="container">
                <h1>Trečias: </h1>
                <div className="container2">
                    {dogs.map((item, index) => {
                        return (
                            <div className={index % 2 ===0 ? 'square':'circle'} key={index }>
                                <p>{item}</p> 
                            </div>
                        );
                    })}

         </div>
            </div>
        </>
    );
}
