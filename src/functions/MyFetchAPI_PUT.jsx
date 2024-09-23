function MyFetchPut() {
    
    let usuarioNuevo = {
        nombre: 'Paco',
        edad: 16
    };
    
    fetch('https://reqres.in/api/users/1', {
        method: 'PUT',
        body: JSON.stringify(usuarioNuevo),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(data => {
        console.log("Respuesta del API PUT: ", data);
    })
    .catch(error => {
        console.log('Error en la petición API PUT');
        console.log(error);
    });

    return (
        <>
            <div>
                <h1>Ejecutando Fetch PUT</h1>
            </div>
        </>
    );
}

export default MyFetchPut;