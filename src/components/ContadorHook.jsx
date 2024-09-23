import { useCounter } from './hooks/useCounter';

export const ContadorHook = () => {
    
    const {valor, acumular} = useCounter(10);

    return (
        <div>
            <h3>Contador Hook: <small>{valor}</small></h3>
            
            <button 
                className="btnIncremento" 
                onClick={()=> acumular(1)}> 
                    Sumar (+1)
            </button> 
            
            <button 
                className="btnDecremento" 
                onClick={()=> acumular(-1)}>
                    Restar (-1)
            </button>
        </div>
    )
};