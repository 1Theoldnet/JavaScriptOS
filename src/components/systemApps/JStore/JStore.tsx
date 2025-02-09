import { FC } from "react"
import { Forms } from "./Forms/Forms"

export const JStore: FC = ({ user, setUser }) => {
    return (
        <div className="jstore-app">
            {!user && <Forms />}
        </div>
    )
}