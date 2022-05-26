import { Link } from "react-router-dom"

const Header = () =>{
    return (
        <div className="header">
        <div className="l-grid">
            <Link to={'/'} className = "link"><h2>Listado de Usuarios</h2></Link>
        </div>
    </div>
    )
}
export default Header