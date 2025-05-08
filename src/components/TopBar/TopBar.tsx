import { FC, useEffect, useState } from "react"
import './TopBar.scss'
import { TypeTopBar } from "./TypeTopBar"

export const TopBar: FC<TypeTopBar> = ({ mouse_pos_x, mouse_pos_y }) => {
    const [time, setTime] = useState(new Date())
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight })

    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
            setSize({ width: window.innerWidth, height: window.innerHeight })
        }, 0.9)
    }, [])

    return (
        <div className="top-bar-component">
            <b style={{ marginLeft: 10, fontSize: 25 }}>Time: {time.getHours()}:{time.getMinutes()}:{time.getSeconds()} --- Size display: {size.width}x{size.height} --- Mouse pos: (x: {mouse_pos_x}, y: {mouse_pos_y})</b>
            <div className="user-block" style={{ marginRight: 5 }}>
                <button>User info</button>
            </div>
        </div>
    )
}