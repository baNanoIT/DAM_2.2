import { useEffect, useRef, useState } from "react";
import { reqRespApi } from "../api/resRes";

export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const pageRef = useRef(1);  // Cambié el valor inicial a 1, ya que paginación normalmente empieza en 1

    useEffect(() => { 
        loadUsers(); 
    }, []);

    const nextPage = () => {
        pageRef.current++;
        loadUsers(); 
    }

    const previousPage = () => {
        if (pageRef.current > 1){
            pageRef.current--;
            loadUsers();
        }
    }

    const loadUsers = async () => {
        try {
            const response = await reqRespApi.get('/users', { 
                params: { page: pageRef.current } 
            });
            if(response.data.data.length > 0){
                setUsuarios(response.data.data);
            } else {
                alert('Ya es toda °O°');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return { usuarios, nextPage, previousPage };
};
