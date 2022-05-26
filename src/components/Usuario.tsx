import { Link } from "react-router-dom"

const Usuario = () =>{
    let id = 1
    return (
        <div className="card">
                <p><span>Nombre: </span>Oscar</p>
                <p><span>Usuario: </span>oscar5</p>
                <p><span>correo: </span>correo@hotmail.com</p>
                <Link to={`/usuarios/${id}`} className = "link">Mas Detalles</Link>
        </div>
    )
}
export default Usuario