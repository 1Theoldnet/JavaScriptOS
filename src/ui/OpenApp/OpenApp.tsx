import { FC, useState } from "react"
import './OpenApp.scss'
import { TypeOpenApp } from "./TypeOpenApp"
import { MdClose } from "react-icons/md"

export const OpenApp: FC<TypeOpenApp> = ({ openApps, setOpenApps, index, activeWindow, setActiveWindow, id, icon, title, isPwaApp, url, positionX, positionY, sizeW, sizeH, children, appState }) => {
    const [defaultPosition, setDefaultPosition] = useState({ x: positionX, y: positionY })
    const [draggible, setDraggible] = useState<boolean>(false)
    const [offset, setOffset] = useState({ x: 0, y: 0 })

    return (
        <>
            <div className={activeWindow === index ? "open-app-active" : "open-app"} onClick={() => setActiveWindow(index)} style={{ borderRadius: appState === "maxsize" ? 0 : 10, zIndex: activeWindow === index ? 4 : 3, top: appState === "maxsize" ? 0 : positionY, left: appState === "maxsize" ? 100 : positionX, position: 'fixed', display: appState === 'show' ? 'none' : 'block', height: appState === 'maxsize' ? '100vh' : sizeH, width: appState === 'maxsize' ? 'calc(100% - 100px)' : sizeW }}>
                <div className='title-bar'
                    onMouseDown={e => {
                        setDraggible(true)
                        setActiveWindow(index)
                        setOffset({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
                    }}

                    onMouseMove={e => {
                        if(draggible) {
                            if(appState === 'maxsize') { 
                                appState = "normal"
                            }

                            setDefaultPosition({ x: e.clientX - offset.x, y: e.clientY - offset.y })
                            openApps[index].positionX = e.clientX - offset.x
                            openApps[index].positionY = e.clientY - offset.y
                            setOpenApps([ ...openApps ])
                        }
                    }}

                    onMouseOver={() => setDraggible(false)}

                    onMouseUp={() => setDraggible(false)}

                    onDoubleClick={() => {
                        if(appState === 'maxsize') {
                            openApps[index].appState = "normal"
                            openApps[index].positionX = defaultPosition.x
                            openApps[index].positionY = defaultPosition.y
                            setOpenApps([ ...openApps ])
                            return
                        }

                        openApps[index].appState = "maxsize"
                        setOpenApps([ ...openApps ])
                    }}
                >
                    <div className="title-bar-text" style={{ display: 'flex', alignItems: 'center' }}><img src={icon} /> <p>{title}</p></div>
                    <div className="title-bar-controls">
                        <button className="minimize" onClick={() => {
                            setDraggible(false)
                            openApps[index].appState = "show"
                            setOpenApps([ ...openApps ])
                        }}></button>

                        <button className="close" onClick={() => {
                            openApps.splice(index, 1)
                            setOpenApps([ ...openApps ])
                        }}><MdClose /></button>
                    </div>
                </div>
                <div className="window-main" style={{ padding: isPwaApp && url !== '' ? 0 : 0 }}>{isPwaApp && url !== '' ? <iframe style={{ border: 'none' }} width='100%' height='100%' src={url} /> : children()}</div>
            </div>
        </>
    )
}