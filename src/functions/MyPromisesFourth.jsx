function MyPromisesFourth() {

    function sumarLento(numero)
    {
        return new Promise( 
            function(resolve, reject){
                setTimeout( 
                    //resolve(numero + 1)
                    reject ('suma lenta')
                    , 1000 )
            }
        )    
    }


    let sumarRapido = (numero) => {
        return new Promise(
            function(resolve, reject){
                setTimeout( 
                    //resolve (numero + 1)
                    reject ('suma rápida')
                    , 1 )
            }
        )
    }

    Promise.race( [sumarLento(5), sumarRapido(1)] ).then(respuesta => { console.log('Respuesta: ', respuesta) }).catch( error => { console.log('Error en la promesa: ', error) } )

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
export default MyPromisesFourth;
