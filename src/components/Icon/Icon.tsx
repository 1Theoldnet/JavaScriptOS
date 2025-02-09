import { FC } from "react"
import './Icon.scss'
import { TypeIcon } from "./TypeIcon"

export const Icon: FC<TypeIcon> = ({ icon }) => {
    return (
        <div className="icon-app">
            <img src={icon} />
        </div>
    )
}