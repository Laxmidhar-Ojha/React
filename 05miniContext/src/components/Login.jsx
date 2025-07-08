import { useState,useContext} from "react"
import UserContext from "../context/UserContext"

const Login=()=> {
    const {setUser}=useContext(UserContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handelSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
        <h2>Log in</h2>
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="username" />
        &nbsp;&nbsp;
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password" />
        <button onClick={handelSubmit}>Log in</button>
    </div>
  )
}

export default Login