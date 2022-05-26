import axios from 'axios'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
//import character from "./types";

const Detalle = () =>{
    let [info,setInfo] = useState({
        name:'',
        username:'',
        email:''
    })
    let [error,setError] = useState<boolean>(false)

    const params = useParams()
    let dato = params.id
    
    const consultarApi = async()=>{
        try{
            const resp = await axios.get(`https://jsonplaceholder.typicode.com/users/${dato}`)
            setInfo(resp.data)
            setError(false)
        }catch(e){
          setError(true)
          console.log(e)
        }
    }

    useEffect(() =>{
        consultarApi()
    },[])

    const {name,username,email} = info
    return (
        <div className="l-container">
            <div className="l-grid container-detalle">
            {error?(<p>Error al consultar la Api</p>):null}
                {name.length===0?(
                    <p>Cargando ...</p>
                ):(
                    <>
                    <h2>Datos del Usuario</h2>
                    <p><span>Nombre: </span>{name}</p>
                    <p><span>Usuario: </span>{username}</p>
                    <p><span>Correo: </span>{email}</p>
                    </>
                )
            }
            </div>
        </div>
    )
}
export default Detalle