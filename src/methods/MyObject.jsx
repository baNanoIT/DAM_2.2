function MyObjects() {
    
    const person = { 
        nombre: 'Jesús Sánchez', 
        edad: 22, 
        direccion: { 
            pais: 'México', 
            estado: 'Nayarit', 
            ciudad: 'Tepic', 
            direccion: 'Por ahí',
        }    
    };

    console.log("JSON Person:", JSON.stringify(person, null, 2))
    return (
        <>
            <div>
                <h1>
                    Programa de Objectos Literales
                </h1>
                <h2>
                    <code> 
                        <pre> 
                            {/*JSON.stringify(persona)*/} 
                            {JSON.stringify(person, null, 2)} 
                        </pre> 
                    </code> 
                </h2>
            </div>
       
        </>
    );
};
export default MyObjects;