import React from "react";
import { useState } from "react";

function JavascriptPractice () {
  // useState to modify DOM
  const [login, setLogin] = useState("Estas entrando al SII");
  const [session, setSession] = useState("Iniciar Sesión");
  const [incisos, setIncisos] = useState("Inciso A) Práctica en Javascript: SII")

  // Login function < Use state application in DOM >
  const singIn = () => {
    const father = document.getElementById("divInfo");
    const studentInfoElement = document.getElementById("studentInfo");

    if (login === "Estas entrando al SII") {
      setLogin("Se ha iniciado sesión correctamente en el Sistema Integral de Información");
      setSession("Cerrar Sesión");
      setIncisos("Inciso B) useState")

      // Creation of new element allowing view of student JSON
      if (!studentInfoElement) {
        const studentInformation = document.createElement("pre"); // PRE label make a better visualizer format to JSON
        studentInformation.id = "studentInfo";
        studentInformation.textContent = JSON.stringify(student, null, 2);

        // Append studentInformation
        father.appendChild(studentInformation);
      }
    } else {
      setLogin("Estas entrando al SII");
      setSession("Iniciar Sesión");
      setIncisos("Inciso A) Práctica en Javascript: SII")

      // Destroy the component child if it exists
      if (studentInfoElement) {
        father.removeChild(studentInfoElement);
      }
    }
  };

  // Student's JSON
  const student = {
    name: "Karla",
    lastName: "Olivares",
    controlNo: "20400007",
    signatures: [
      "Multiplatform Application Development",
      "AI",
      "NoSQL Databases",
    ],
  };

  return (
    <div>
      <div>
        <h1>{incisos}</h1>
      </div>

      <div id="divInfo">
        <h2>{login}</h2>
      </div>

      <div>
        <button onClick={singIn}>{session}</button>
      </div>
    </div>
  );
}

export default JavascriptPractice;
