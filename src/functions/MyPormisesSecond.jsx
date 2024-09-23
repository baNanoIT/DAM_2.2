function MyPromisesSecond() {

    function sumarLento(numero)
    {
        return new Promise( 
            function(resolve, reject){

                if (numero >= 5){
                    reject('La suma lenta falló')
                }

                setTimeout(
                    resolve(numero + 1), 800
                )
            }
        )    
    }


    let sumarRapido = (numero) => {
        return new Promise(
            function(resolve, reject){
                    if (numero <= 9){
                        reject('La suma rápida falló')
                    }
                    setTimeout(
                        resolve (numero + 1), 300
                    )
            }
        )
    }

    // Llamar funciones:
    sumarLento(0    ).then(
        respuesta => { console.log('<Ejecución en solitario> Sumar lento: ' + respuesta)}
        ).catch( error => {console.log(error)});

    sumarRapido(15).then(
        respuesta => { console.log('<Ejecución en solitario> Sumar rápido: ' + respuesta)}
        ).catch(error => { console.log(error) });

    // Promise.all permite llamar varias promesas de manera simultanea 
    Promise.all([sumarLento(1), sumarRapido(10)]).then(respuestas => { console.log('Respuestas:', respuestas); })
        .catch(error => {console.log("Ha ocurrido un error al ejecutar una promesa: ", error);});


    return (
        <>
            <div>
                <h1>
                    Programa de Funciones con Promesas
                </h1>
            </div>
    
        </>
    );
};// My promises Sencod
export default MyPromisesSecond;
