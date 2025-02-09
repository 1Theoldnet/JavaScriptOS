import { FC, useState } from "react"
import './Register.scss'
import axios from "axios"

export const Register: FC = ({ setOpen }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const inputChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    return (
        <form className="register" onSubmit={e => {
            e.preventDefault()

            axios
                .get('http://localhost:3000/users')
                .then(res => {
                    const users = res.data
                    const { name, email, password } = formData

                    console.table(users)
                    console.log(users.find(user => user.name === name || user.email === email || user.password === password))

                    if(users.find(user => user.name === name || user.email === email || user.password === password)) return

                    axios
                        .post('http://localhost:3000/users', { id: res.data.length + 1, name, email, password, myApps: [] })
                        .then(res => res.statusText === 'Created' && setOpen(true))
                })
        }}>
            <input name="name" placeholder="Name" value={formData.name} onChange={e => inputChange(e)} />
            <input name="email" placeholder="Email" type="email" value={formData.email} onChange={e => inputChange(e)} />
            <input name="password" placeholder="Password" type="password" value={formData.password} onChange={e => inputChange(e)} />
            <button>Register</button>
        </form>
    )
}