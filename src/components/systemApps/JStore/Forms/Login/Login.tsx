import axios from "axios"
import { FC, useState } from "react"
import './Login.scss'

export const Login: FC = ({ setUser }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const inputChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    return (
        <form className="login" onSubmit={e => {
            e.preventDefault()

            axios
                .get('http://localhost:3000/users')
                .then(res => {
                    const users = res.data
                    const { email, password } = formData

                    const user = users.find(user => user.email === email && user.password === password)

                    console.log(user.id)

                    if(!user) return 

                    setUser(user)
                })
        }}>
            <input name="email" placeholder="Email" type="email" value={formData.email} onChange={e => inputChange(e)} />
            <input name="password" placeholder="Password" type="password" value={formData.password} onChange={e => inputChange(e)} />
            <button>Login</button>
        </form>
    )
}