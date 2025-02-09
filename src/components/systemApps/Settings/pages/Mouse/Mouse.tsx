import { FC, useState } from "react"
import './Mouse.scss'
import { MdDelete } from "react-icons/md"
import { TypeMousePage } from "./TypeMousePage"

export const Mouse: FC<TypeMousePage> = ({ mouse, setMouse }) => {
    const [urlMouse, setUrlMouse] = useState<string>('')
    const [speed, setSpeed] = useState<number>(0)

    const [mouseIndex, setMouseIndex] = useState<number | null>(null)

    return (
        <div className="mouse-page">
            <input type="url" placeholder="Enter URL Image" value={urlMouse} onChange={e => setUrlMouse(e.target.value)} />
            <button className="add-mouse" onClick={() => {
                if(urlMouse.trim() === '') return

                mouse.allMouse.push(urlMouse)

                setMouse(prevMouse => ({ ...prevMouse }));

                setUrlMouse('');
            }}>Add a new mouse</button>
            <br />
            <br />
            <b>Мыши</b>
            <div className="allMouse">
                {mouse.allMouse.map((mouse, i) => <div key={i} className='mouseMap' style={{ backgroundImage: `url(${mouse})` }} onClick={() => {
                    if(mouse.mouseIndex === i) return

                    setMouse(prevMouse => ({ ...prevMouse, mouseIndex: i }))
                }} onMouseOver={() => setMouseIndex(i)} onMouseOut={() => setMouseIndex(null)}>
                    {mouseIndex === i && <button className="remove-mouse" onClick={() => {
                        
                    }}><MdDelete /></button>}
                </div>)}
            </div>

            Плавность перемешения курсора
            {speed}%
            <input type="range" value={speed} min={0} max={100} onChange={e => {
                const newSpeed = Number(e.target.value)

                setSpeed(newSpeed)
                setMouse(mouse => ({ ...mouse, speed: newSpeed }))
            }} />

            
        </div>
    )
}