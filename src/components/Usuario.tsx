import { Link } from "react-router-dom"
import character from "./types"

interface props {
    usr:character
}
const Usuario = ({usr}:props) =>{
    const{id,name,username,email} =usr
    return (
        <div className="card">
                <p><span>Nombre: </span>{name}</p>
                <p><span>Usuario: </span>{username}</p>
                <p><span>correo: </span>{email}</p>
                <Link to={`/usuarios/${id}`} className = "link">Mas Detalles</Link>
        </div>
    )
}
export default Usuario