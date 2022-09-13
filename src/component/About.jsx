import { useContext } from "react"
import { UserContext } from "../context/UserContext"

const About = () => {

    const { name, age } = useContext(UserContext)
    return (
        <div>
            <h2>User Component</h2>
            <div>name - {name}</div>
            <div>age - {age}</div>
        </div>
    )
}

export default About