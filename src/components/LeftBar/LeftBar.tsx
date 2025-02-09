import { FC, useState } from "react"
import './LeftBar.scss'
import { TypeLeftBar } from "./TypeLeftBar"
import { Icon } from "../Icon/Icon"
import { CountextMenu } from "../../ui/ContextMenu/ContextMenu"
import { CountextMenuItem } from "../../ui/ContextMenu/CountextMenuItem/CountextMenuItem"

export const Leftbar: FC<TypeLeftBar> = ({ apps, setApps, openApps, setOpenApps, activeWindow, setActiveWindow }) => {
    const [openContext, setOpenContext] = useState<boolean>(false)
    const [openContextPosition, setOpenContextPosition] = useState({ x: 0, y: 0 })
    const [openContextMenuIndexApp, setOpenContextMenuIndexApp] = useState<number>(0)

    return (
        <div className="left-bar" onContextMenu={e => e.preventDefault()}>
            <div className="left-bar-menu" onClick={() => setOpenContext(false)}>
                {openContext && <CountextMenu x={openContextPosition.x} y={openContextPosition.y}>
                    <CountextMenuItem onClick={() => {
                        if (openApps.find(openApp => openApp.title === apps[openContextMenuIndexApp].title)) {
                            // Если приложение уже открыто, то закрываем окно
                            setOpenApps(openApps.filter(openApp => openApp.title !== apps[openContextMenuIndexApp].title));
                            setActiveWindow((prev) => prev - 1);
                        } else {
                            // Иначе открываем окно
                            setOpenApps([
                                ...openApps,
                                { id: openApps.length + 1, ...apps[openContextMenuIndexApp] }
                            ]);
                            setActiveWindow((prev) => prev + 1);
                        }
                    }}>{openApps.find(openApp => openApp.title == apps[openContextMenuIndexApp].title) ? 'Закрыть' : 'Открыть'}</CountextMenuItem>
                    {apps[openContextMenuIndexApp].sysApp ? <></> : <CountextMenuItem onClick={() => {
                        setApps(apps.filter((_, i) => i !== openContextMenuIndexApp));
                        if (openApps.find(openApp => openApp.title === apps[openContextMenuIndexApp].title)) {
                            setOpenApps(openApps.filter(openApp => openApp.title !== apps[openContextMenuIndexApp].title));
                        }
                    }}>Удалить</CountextMenuItem>}
                    <CountextMenuItem onClick={() => null}>Свойства</CountextMenuItem>    
                </CountextMenu>}
                <div className="apps-icons">
                    {apps.map((app, i) => <div style={{ opacity: activeWindow === i ? 1 : 0.5 }} onClick={() => {
                        if(openApps.find(openApp => openApp.title == apps[i].title)) {
                            setActiveWindow(i)
                            return
                        }
                        
                        setOpenApps([ ...openApps, { id: openApps.length + 1, icon: apps[i].icon, title: apps[i].title, isPwaApp: apps[i].isPwaApp, url: apps[i].url, positionX: apps[i].positionX, positionY: apps[i].positionY, appState: apps[i].appState, sizeW: apps[i].sizeW, sizeH: apps[i].sizeH, children: apps[i].children }])
                        setActiveWindow(activeWindow + 1)
                    }} onContextMenu={e => {
                        e.preventDefault()
                        setOpenContext(true)
                        setOpenContextMenuIndexApp(i)
                        setOpenContextPosition({ x: Math.round(e.clientX - 10), y: Math.round(e.clientY - 8) })
                    }} key={i}><Icon icon={app.icon} /></div>)}
                </div>
            </div>
        </div>
    )
}