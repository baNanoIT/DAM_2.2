// Importar la función de reducer y useEffect de la librería
import { useReducer, useEffect } from "react"


// Se define el estado inicial de la aplicación
// con las propiedades: Validadndo, token, username y nombre.
const initialState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}


// authReducer es quien lleva la chamba
// recibe el estado actual y una acción
const authReducer = (state, action) => {
    switch(action.type) {
        case 'logout':
            return {
                token: null,
                username: '',
                nombre: '',
                validando: false
            };
        case 'login':
            const {nombre, username} = action.payload;
            return {
                validando: false,
                token: 'MITOKEN1234567890',
                //username: action.payload.username,
                //nombre: action.payload.nombre,
                username,
                nombre,
            }
        default:
            return state;
    }
}


export const Login = () => {
    //const [{validando, token}, dispatch] = useReducer(authReducer, initialState)
    const [state, dispatch] = useReducer(authReducer, initialState)
   
    useEffect(() => {
        setTimeout(() => {
          dispatch({type:'logout'}) 
        }, 2500);
    }, []);

    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                username: 'Dr.FIC',
                nombre: 'Frank'
            }
        })
    }

    const logout = () => {
        dispatch({
            type: 'logout',
        })
    }

    //FIC: si se agregara una dependencia 
    if (state.validando) {
        return (
        <>
            <h3>Login</h3>
                <div className="ficAlertInfo_Div">
                    Validando Información...
                </div>   
        </>
        )
    }
    return (
        <>
            <h3>Login</h3>
            {
            (  state.token  )
                ? 
                (
                    <div className="ficAlertSuccess_Div">
                        Autenticado como: { state.nombre }
                    </div>
                )
                : 
                (   
                    <div className="ficAlertDanger_Div">
                        No Autenticado...
                    </div>
                )
            }
            {
                ( state.token )
                ? ( 
                    <button
                        name="ficLogut_Button"
                        className="ficLogout_Button"
                        onClick={ logout }
                    >
                        Login   
                    </button> 
                )
                : (   
                    <button
                        name="ficLogin_Button"
                        className="btn btn-primary"
                        onClick={ login }
                    >
                        Login   
                    </button>  
                )
            }           
        </>
    )
}
