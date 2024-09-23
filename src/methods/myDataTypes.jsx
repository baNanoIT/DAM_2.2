function MyDataTypes() {
   
    let IdNombre = 'Frank';
    IdNombre = 706;

    const Nombre = "Francisco";
    const Apellidos = "Ibarra Carlos"
    const NumControl = 706;
    const NumControl2 = 1074;
    const FechaReg = new Date();
    let Experiencia = 20;
    let Activo = true;


    console.log("IdNombre:", IdNombre);
    console.log("IdNombre:", Apellidos);
    console.log("IdNombre:", NumControl);
    console.log("IdNombre:", NumControl2);
    console.log("IdNombre:", FechaReg);
    console.log("IdNombre:", Experiencia);
    console.log("IdNombre:", Activo);
 
    return (
        <>
          <h3>Tipos Básicos</h3> 
            {IdNombre},
<br/>
          {Nombre},
<br/>
          {Apellidos},
<br/>
          {NumControl},
<br/>
          {NumControl2},
<br/>
          {FechaReg.toString()},
<br/>
          {Experiencia},
<br/>
          {(Activo) ? 'Activo' : 'No Activo'}
        </>
    )
};

export default MyDataTypes;