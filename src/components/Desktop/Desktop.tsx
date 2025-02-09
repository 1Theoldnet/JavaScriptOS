import { FC } from "react"
import './Desktop.scss'
import { TypeDesktop } from "./TypeDesktop"
import { OpenApp } from "../../ui/OpenApp/OpenApp"

export const Desktop: FC<TypeDesktop> = ({ openApps, setOpenApps, activeWindow, setActiveWindow }) => {
    return (
        <div className="desktop" onContextMenu={e => e.preventDefault()}>
            {openApps.map((openApp, i) => <OpenApp index={i} openApps={openApps} setOpenApps={setOpenApps} activeWindow={activeWindow} setActiveWindow={setActiveWindow} {...openApp} key={i} />)}

            
        </div>
    )
}