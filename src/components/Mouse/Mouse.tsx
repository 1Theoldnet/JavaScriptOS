import { FC } from "react"
import './Mouse.scss'
import { TypeMouse } from "./TypeMouse"

export const Mouse: FC<TypeMouse> = ({ x, y, icon, isEnable, speed }) => {
    return (
        <div className="mouse" style={{ top: y, left: x, display: isEnable ? 'block' : 'none', transition: `${speed}ms all` }}>
            <img src={icon} />
        </div>
    )
}