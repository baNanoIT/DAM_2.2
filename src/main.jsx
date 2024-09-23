import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Imports de la carpeta functions
// import MyFunctions from './functions/MyFunctions.jsx'
// import MyPromises from './functions/MyPromises.jsx'
// import MyPromisesSecond from './functions/MyPormisesSecond.jsx'
// import MyPromisesThird from './functions/MyPromisesThird.jsx'
// import MyPromisesFourth from './functions/MyPromisesFourth.jsx'
// import MyFetchsAPIs from './functions/MyFetchs.jsx'
// import MyFetchPut from './functions/MyFetchAPI_PUT.jsx'
// import MyFetchPost from './functions/MyFetchAPI_POST.jsx'
// import MyFetchBlob from './functions/MyFetchAPI_BLOB.jsx'
// import MyDataTypes from './methods/myDataTypes.jsx'
// import MyObjects from './methods/MyObject.jsx'
// import { Contador } from './components/contador.jsx'
// import JavascriptPractice from './components/javascriptPractice.jsx'
// import { ContadorHook } from './components/ContadorHook.jsx'
//import { Login } from './components/Login.jsx'
// import { Usuarios } from './components/Usuarios.jsx'
import { Fomularios } from './components/fomulario.jsx'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
  // <App/>
  // <MyPromises/>
  // <MyPromisesSecond/>
  // <MyPromisesThird/>
  // <MyPromisesFourth/>
  //<MyFetchsAPIs/>
  //<MyFetchPut/>,
  //<MyFetchPost/>,
  //<MyFetchBlob/>,
  //<MyDataTypes/>,
  //<MyObjects/>
  //<Contador/>
  //<JavascriptPractice/>
  //<ContadorHook/>
  // <Login/>
  //<Usuarios/>
  <Fomularios/>
  //</StrictMode>,
)
