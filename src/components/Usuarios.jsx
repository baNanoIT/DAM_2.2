import { useUsuarios } from "./hooks/useUsuarios";

export const Usuarios = () => {
    // Llama al hook dentro del componente funcional
    const { usuarios, nextPage, previousPage } = useUsuarios();

    const renderItem = (usuario) => {
        return (
            <tr key={usuario.id.toString()}>
                <td>
                    <img
                        src={ usuario.avatar }
                        alt={ usuario.first_name }
                        style={{
                            width: 50,
                            borderRadius: 100
                        }}
                    />
                </td>
                <td>
                    { usuario.first_name } { usuario.last_name }
                </td>
                <td>
                    { usuario.email }
                </td>
            </tr>
        )
    }

    return (
        <>
            <h3>Usuarios</h3>
            <table className="tblUsuarios">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
                <tbody>{ usuarios.map(AddUser => renderItem(AddUser)) }</tbody>
            </table>
            <button onClick={nextPage}>Siguiente</button>
            <button onClick={previousPage}>Anterior</button>
        </>
    )
}
