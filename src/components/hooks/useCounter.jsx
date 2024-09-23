import { useState } from "react";

export const useCounter = (valorInicial) => {
    const [valor, setValor] = useState(valorInicial);
    
    const acumular = (numero)=> {
        setValor(valor + numero);
        console.log(setValor(valor + numero));    
    };

    return { valor, acumular}
}