function MyFetchBlob(){

    fetch('src/images/RE2R.jpeg')
    .then(resp => resp.blob())
    .then(image => {
        document.getElementById("IdImg1").src = URL.createObjectURL(image);
    });

    fetch('src/images/RE4R.jpg')
    .then(resp => resp.blob())
    .then(image => {
        document.getElementById("IdImg2").src = URL.createObjectURL(image);
    });

    return(
        <>
            <div>
                <div style={{marginBottom: "20px"}}>
                <h1>Ejecutando Fetch BLOB</h1>
                <text>Su función principal es traer contenido multimedia, ya sea imagenes, video u otro tipo de archivo.</text>
                </div>
                
                
                <div>
                    <img id="IdImg1" alt="Imagen 1" style={{ width: "575px", height: "auto", marginRight: "20px" }} />
                    <img id="IdImg2" alt="Imagen 2" style={{ width: "500px", height: "auto" }} />
                </div>
                

            </div>
        </>
    );
}

export default MyFetchBlob;