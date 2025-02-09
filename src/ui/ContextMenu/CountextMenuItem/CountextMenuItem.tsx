import { FC } from "react"
import './CountextMenuItem.scss'
import { TypeCountextMenuItem } from "./TypeCountextMenuItem"

export const CountextMenuItem: FC<TypeCountextMenuItem> = ({ onClick, children }) => {
    return (
        <div className="context-menu-item" onClick={onClick}>{children}</div>
    )
}