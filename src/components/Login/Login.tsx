import { FC, useState } from "react"
import './Login.scss'
import { TypeLogin } from "./TypeLogin"

export const Login: FC<TypeLogin> = ({ users }) => {
    const [selectUser, setSelectUser] = useState<number>(0)
    const [slowUserList, setShowUserList] = useState<boolean>(true)

    return (
        <div className="login-component">
            <div className="user-div">
                <div className="header-user-div">
                    {!slowUserList ? <button onClick={() => setShowUserList(true)}>Back</button> : <div></div>}
                    <b>{slowUserList ? 'Choise user' : 'Login'}</b>
                    <div></div>
                </div>
                {slowUserList ? <div className="users-list">
                    {users.map((user, i) => <div key={user.id} className="user-choice" onClick={() => { setSelectUser(i), setShowUserList(false) }}>
                        <p>ID: {user.id}</p>
                        <img src={user.avatar.trim() === '' ? 'https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740' : user.avatar} width={30} />
                        <b>{user.name}</b>
                    </div>)}
                </div> : <div className="select-user">
                    <b>{users[selectUser].name}</b>
                </div>}
            </div>
        </div>
    )
}