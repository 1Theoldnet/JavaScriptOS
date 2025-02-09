import { FC, useState } from "react"
import { Login } from "./Login/Login"
import { Register } from "./Register/Register"
import './Forms.scss'

export const Forms: FC = ({ setUser }) => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <div className="forms">
            {!open ? <Register setOpen={setOpen} /> : <Login setUser={setUser} />}
        </div>
    )
}