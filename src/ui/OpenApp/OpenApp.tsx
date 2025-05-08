import { FC, ReactElement, useRef, useState } from "react"
import './OpenApp.scss'
import { TypeOpenApp } from "./TypeOpenApp"
import { IoClose } from "react-icons/io5"
import { FiArrowDownLeft, FiArrowDownRight, FiArrowUpLeft, FiArrowUpRight, FiSquare } from "react-icons/fi"
import { BsArrowsFullscreen, BsBorderBottom, BsBorderInner, BsBorderLeft, BsBorderRight, BsBorderTop } from "react-icons/bs"
import { BiMinus } from "react-icons/bi"
import { GoKebabHorizontal } from "react-icons/go"

export const OpenApp: FC<TypeOpenApp> = ({ openApps, setOpenApps, index, activeWindow, setActiveWindow, icon, title, isPwaApp, url, positionX, positionY, sizeW, sizeH, children, appState }) => {
    const [defaultPosition, setDefaultPosition] = useState({ x: positionX, y: positionY })
    const [draggible, setDraggible] = useState<boolean>(false)
    const [num, setNum] = useState<number>(-350)
    const [offset, setOffset] = useState({ x: 0, y: 0 })
    const win = useRef<any>(null)

    const icons: ReactElement[] = [<BsBorderBottom />, <BsBorderLeft />, <BsBorderTop />, <BsBorderRight />, <FiArrowUpLeft />, <FiArrowUpRight />, <FiArrowDownLeft />, <FiArrowDownRight />]

    return (
        <>
            <div ref={win} className={activeWindow === index ? "open-app-active" : "open-app"} onClick={() => { setNum(-350), setActiveWindow(index) }} style={{ borderRadius: appState === "maxsize" ? 0 : 10, zIndex: activeWindow === index ? 4 : 3, top: appState === "maxsize" ? 45 : positionY, left: appState === "maxsize" ? 100 : positionX, position: 'fixed', display: appState === 'show' ? 'none' : 'block', height: appState === 'maxsize' ? 'calc(100vh - 45px)' : sizeH, width: appState === 'maxsize' ? 'calc(100% - 100px)' : sizeW }}>
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
                            if(num === -350) {
                                setNum(7)
                                return
                            }

                            setNum(-350)
                        }}><GoKebabHorizontal /></button>
                        
                        <button className="minimize" onClick={() => {
                            setDraggible(false)
                            openApps[index].appState = "show"
                            setOpenApps([ ...openApps ])
                        }}><BiMinus /></button>

                        <button className="minimize" onClick={() => {
                            if(openApps[index].appState === "normal") {
                                openApps[index].appState = "maxsize"
                                setOpenApps([ ...openApps ])
                                return
                            }

                            openApps[index].appState = "normal"
                            setOpenApps([ ...openApps ])
                        }}>{openApps[index].appState === "maxsize" ? <FiSquare /> : <BsArrowsFullscreen />}</button>

                        <button className="close" onClick={() => {
                            const width: string = win.current.style.width
                            const height: string = win.current.style.height

                            openApps.splice(index, 1)
                            setOpenApps([ ...openApps ])
                        }}><IoClose /></button>
                    </div>
                </div>
                <div className="open-modal" style={{ right: `${num}px` }}>
                    {icons.map((icon, i) => <button key={i} onClick={() => {
                        if(i === 0) {
                            win.current.style.width = 'calc(100% - 100px)'
                            win.current.style.height = 'calc((100vh - 45px) / 2)'
                            win.current.style.left = '100px'
                            win.current.style.top = 'calc(100vh - (100vh - 45px) / 2)'
                            // h `${Math.round((window.innerHeight - 45) / 2)}px`
                            // t `${Math.round(window.innerHeight - Number(height.slice(0, -2)))}px`
                        } else if(i === 1) {
                            win.current.style.height = 'calc(100% - 45px)'
                            win.current.style.width = 'calc((100% / 2) - 50px)'
                            win.current.style.left = '100px'
                            win.current.style.top = '45px'
                        } else if(i === 2) {
                            win.current.style.height = 'calc((100vh - 45px) / 2)'
                            win.current.style.width = 'calc(100% - 100px)'
                            win.current.style.left = '100px'
                            win.current.style.top = '45px'
                        } else if(i === 3) {
                            win.current.style.height = 'calc(100% - 45px)'
                            win.current.style.width = 'calc((100% / 2) - 50px)'
                            win.current.style.left = 'calc(100% - (100% - 100px) / 2)'
                            win.current.style.top = '45px'
                        } else if(i === 4) {
                            win.current.style.height = 'calc((100vh - 45px) / 2)'
                            win.current.style.width = 'calc((100% / 2) - 50px)'
                            win.current.style.left = '100px'
                            win.current.style.top = '45px'
                        } else if(i === 5) {
                            win.current.style.height = 'calc((100vh - 45px) / 2)'
                            win.current.style.width = 'calc((100% / 2) - 50px)'
                            win.current.style.left = 'calc(100% - (100% - 100px) / 2)'
                            win.current.style.top = '45px'
                        } else if(i === 6) {
                            win.current.style.height = 'calc((100vh - 45px) / 2)'
                            win.current.style.width = 'calc((100% / 2) - 50px)'
                            win.current.style.left = '100px'
                            win.current.style.top = 'calc(100vh - (100vh - 45px) / 2)'
                        } else if(i === 7) {
                            win.current.style.height = 'calc((100vh - 45px) / 2)'
                            win.current.style.width = 'calc((100% / 2) - 50px)'
                            win.current.style.left = 'calc(100% - (100% - 100px) / 2)'
                            win.current.style.top = 'calc(100vh - (100vh - 45px) / 2)'
                        }
                    }}>{icon}</button>)}
                </div>
                <div className="window-main" style={{ padding: isPwaApp && url !== '' ? 0 : 0 }}>{isPwaApp && url !== '' ? <iframe style={{ border: 'none' }} width='100%' height='100%' src={url} /> : children()}</div>
            </div>
        </>
    )
}