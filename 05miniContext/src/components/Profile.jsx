import { useContext } from "react"
import UserContext from "../context/UserContext"

const Profile=()=> {
    const {user}=useContext(UserContext)
    if(!user) return <h3>please Log in</h3>
    return <h3>Wellcome {user.username}</h3>
}

export default Profile