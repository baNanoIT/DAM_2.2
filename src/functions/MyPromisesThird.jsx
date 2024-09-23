function MyPromisesThird() {

    function sumarLento(numero)
    {
        return new Promise( 
            function(resolve, reject){
                setTimeout( resolve(numero + 1), 800 )
            }
        )    
    }


    let sumarRapido = (numero) => {
        return new Promise(
            function(resolve, reject){
                setTimeout( resolve (numero + 1), 300 )
            }
        )
    }

    let arreglos = [ sumarLento(5), sumarRapido(10), true, '¡Hola Mundo!' ]

    
    // Promise.all permite llamar varias promesas de manera simultanea 
    Promise.all(arreglos).then(respuestas => { 
            console.log('Respuestas:', respuestas); 
        }).catch(error => {console.log("Ha ocurrido un error al ejecutar una promesa: ", error);});


    return (
        <>
            <div>
                <h1>
                    Programa de Funciones con Promesas
                </h1>
            </div>
    
        </>
    );
};// My promises Third
export default MyPromisesThird;
