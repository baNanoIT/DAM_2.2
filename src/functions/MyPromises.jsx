function MyPromises() {
    
    //Nota: 3.3
    function sumarUno(numero){
        var promesa = new Promise(function(resolve, reject){

            //Nota: 3.3.11
            if (numero >= 7)
            {
                reject ('El número { ' + numero + ' } ya es muy alto');
            }

            setTimeout(function(){
                resolve( numero + 1 );
                }, 800);
        });
    return promesa;
    };
    
    //Llamar promesa Forma Clásica
    // fcnSumarUno(5).then( 
    //     function(nuevoNumero){
    //         console.log(nuevoNumero);
    //     }   
    // );

    // Llamar promesa Forma Actual
    sumarUno(5).then(sumarUno)
               .then(sumarUno)
               .then( nuevoNumero => { console.log (nuevoNumero); } )
               .catch(
                    error => { console.log ('Error en la promesa: ', error) }
               );// Catch
   
    return (
        <>
            <div>
                <h1>
                    Programa de Funciones con Promesas
                </h1>
            </div>
       
        </>
    );
};
export default MyPromises;