import {useState,useEffect } from "react"
import axios from 'axios'
import Usuario from "./Usuario"
import character from "./types";


const Usuarios = () =>{
    let [users,setUsers] = useState<Array<character>>([])
    let [error,setError] = useState<boolean>(false)

    const consultarApi = async() =>{
        try{
            const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(resp.data)
            setError(false)
        }catch(e){
          setError(true)
          console.log(e)
        }
    }

    useEffect(() =>{
        consultarApi()
    },[])
    return (
        <div className="l-container">
        <div className="l-grid container">
            {error?(<p>Error al consultar la Api</p>):null}
            {users.length===0?(
                <p>Cargando ...</p>
            ):(
                users.map(usr=>(
                    <Usuario 
                    key = {usr.id}
                    usr = {usr}
                    />
                ))
            )}
        </div>
    </div>
    )
}
export default Usuarios