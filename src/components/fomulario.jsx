import { useForm } from './hooks/useForm';

export const Fomularios = () => {
    
    const {formulario, email, password, onChange} = useForm({ email: '', password: ''});

    return(
        <>
            <h3>Formulario</h3>
            <input 
                type="text" 
                className="form-control"
                placeholder="E-mail"
                value={email}
                onChange={ ({target}) => onChange(target.value, 'email')}
            />
            <input 
                type="password" 
                className="form-control mt-2 mb-2" 
                placeholder="Ingrese su contraseña" 
                value={password}
                onChange={ ({target}) => onChange(target.value, 'password')}
            />

            <code>
                <pre>
                    {JSON.stringify(formulario, null, 2)}
                </pre>
            </code>
        </>
    );
}
