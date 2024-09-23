// Nota: 3.2
function sumarUnoAsync(numero, resultadoCallBack) { 
    
    // Coloca el tiempo de resupuesta < setTimeOut > 
    // para una función anónima < Function > 
    // Se establece el tiempo de etraso para retornar el resultado < 800 milisegundos >
    setTimeout ( function(){ resultadoCallBack(numero + 1); }, 800 )

}

export default sumarUnoAsync;