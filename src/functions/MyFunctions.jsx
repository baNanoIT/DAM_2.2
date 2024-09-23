// Importar funciones
import sumarUno from './sumarUno.jsx';
import sumarUnoAsync from './sumarUnoAsync.jsx';


// Funcion para colocar título al momento de ser llamada
function MyFunctions(){
    

    console.log("Programa de Funciones");

    // Nota: 3.2 Método para sumar
    let resultado = sumarUno(5);
    console.log( "El resultado de la suma es: "+ resultado);

    // Nota: 3.2 Método para sumar asíncrono
    sumarUnoAsync( 5, function(nuevoValor) {
        console.log("Resultado de función asíncrona: " + nuevoValor);
    })

    
    return(
        <>
            <div>
                <h1> Programa de Funciones </h1>
            </div>
        </>

    );
}

// Cada archivo se considera un módulo independiente.
// Export default se utiliza para exportar una única clase o funcion 
//  sin necesidad de utilizar el nombre original. 
// Export como tal permite la exportación de varios módulos y en 
// este caso es importante respetar los nombres originales.

export default MyFunctions;


