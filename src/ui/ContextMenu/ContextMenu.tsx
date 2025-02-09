import { FC } from "react"
import { TypeContextMenu } from "./TypeContextMenu"
import './ContextMenu.scss'

export const CountextMenu: FC<TypeContextMenu> = ({ children, x, y }) => {
    return (
        <div className="countext-menu" style={{ top: y, left: x }}>{children}</div>
    )
}