import { useState } from "react";

export const useForm = (formulario) => {
    const [state, setState] = useState(formulario);

    const onChange = (value, field) => {
        setState({
            ...state,
            [field]: value
        });
    };

    return {
        ...state, 
        formulario: state, 
        onChange
    };
};
