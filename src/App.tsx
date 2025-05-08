import { FC, useState } from "react"
import { Desktop } from "./components/Desktop/Desktop"
import { Leftbar } from "./components/LeftBar/LeftBar"
import { TypeAllApp } from "./TypeAllApp"
import { TypeApp } from "./TypeApp"
import { Mouse } from "./components/Mouse/Mouse"
import { TopBar } from "./components/TopBar/TopBar"
import { Browser } from "./components/systemApps/Browser/Browser"
import { Settings } from "./components/systemApps/Settings/Settings"
import { TypeMouseState } from "./TypeMouseState"
import { JStore } from "./components/systemApps/JStore/JStore"
import { TypeUser } from "./TypeUser"
import { Login } from "./components/Login/Login"

export const App: FC = () => {
    const [apps, setApps] = useState<TypeAllApp[]>([
        {
            id: 1,
            icon: 'https://storage.googleapis.com/libraries-lib-production/images/GoogleLogo-canvas-404-300px.original.png',
            title: 'Google',
            pathLocation: 'Apps:Google',
            isPwaApp: true,
            url: 'https://www.google.com/webhp?igu=1',
            sizeApp: 512,
            positionX: 50,
            positionY: 50,
            appState: 'maxsize',
            sizeW: 400,
            sizeH: 400,
            sysApp: true
        },
        {
            id: 2,
            icon: 'https://img.icons8.com/?size=256w&id=xIRBcmltzN2R&format=png',
            title: 'Paint',
            pathLocation: 'Apps:Paint',
            isPwaApp: false,
            url: '',
            sizeApp: 512,
            positionX: 50,
            positionY: 50,
            appState: 'normal',
            sizeW: 550,
            sizeH: 550,
            sysApp: true,
            children: () => <p>wdwad</p>
        },
        {
            id: 3,
            icon: 'https://static.vecteezy.com/system/resources/previews/016/716/476/non_2x/internet-browser-icon-free-png.png',
            title: 'Browser',
            pathLocation: 'Apps:Browser',
            isPwaApp: false,
            url: '',
            sizeApp: 512,
            positionX: 250,
            positionY: 50,
            appState: 'normal',
            sizeW: 550,
            sizeH: 550,
            children: () => <Browser />,
            sysApp: true
        },
        {
            id: 5,
            icon: 'https://img.icons8.com/?size=256w&id=kJr8od2fGcmF&format=png',
            title: 'JStore',
            pathLocation: 'Apps:JStore',
            isPwaApp: false,
            url: '',
            sizeApp: 512,
            positionX: 200,
            positionY: 30,
            appState: 'normal',
            sizeW: 680,
            sizeH: 580,
            children: () => <JStore />,
            sysApp: true
        },
        {
            id: 6,
            icon: 'https://play-lh.googleusercontent.com/mOMVlWK_cLLdOOO3XUWiw1zFf7FO15f_ys2XmcYKJLOMTHF-eGtQddXE-wYDSd9kd5Q',
            title: 'Settings',
            pathLocation: 'Apps:Settings',
            isPwaApp: false,
            url: '',
            sizeApp: 512,
            positionX: 250,
            positionY: 50,
            appState: 'normal',
            sizeW: 550,
            sizeH: 550,
            children: () => <Settings mouse={mouse} setMouse={setMouse} />,
            sysApp: true
        }
    ])

    const [lock, setLock] = useState<boolean>(false)
    
    const [users, setUsers] = useState<TypeUser[]>([
        {
            id: 1,
            avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
            name: 'Admin',
            description: '',
            password: '12345',
            apps: [],
            links: [],
            desktops: []
        },
        {
            id: 2,
            avatar: '',
            name: 'Mavludin',
            description: '',
            password: '',
            apps: [],
            links: [],
            desktops: []
        },
        {
            id: 1,
            avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
            name: 'Admin',
            description: '',
            password: '12345',
            apps: [],
            links: [],
            desktops: []
        },
        {
            id: 2,
            avatar: '',
            name: 'Mavludin',
            description: '',
            password: '',
            apps: [],
            links: [],
            desktops: []
        }
    ])

    const [openApps, setOpenApps] = useState<TypeApp[]>([])

    const [activeWindow, setActiveWindow] = useState<number>(0)

    const [mouse, setMouse] = useState<TypeMouseState>({
        speed: 0,
        mousePositionX: window.innerWidth / 2,
        mousePositionY: window.innerHeight / 2,
        mouseIndex: 0,
        isEnable: true,
        allMouse: ['https://cdn-icons-png.flaticon.com/512/5425/5425749.png']
    })

    return (
        <div onMouseMove={e => setMouse({ ...mouse, mousePositionX: e.clientX, mousePositionY: e.clientY })}>
            <Mouse speed={mouse.speed} x={mouse.mousePositionX} y={mouse.mousePositionY} icon={mouse.allMouse[mouse.mouseIndex]} isEnable={mouse.isEnable} />  
            {lock ? <Login users={users} /> : <><TopBar mouse_pos_x={mouse.mousePositionX} mouse_pos_y={mouse.mousePositionY} />
            <Leftbar apps={apps} setApps={setApps} openApps={openApps} setOpenApps={setOpenApps} activeWindow={activeWindow} setActiveWindow={setActiveWindow} />
            <Desktop openApps={openApps} setOpenApps={setOpenApps} activeWindow={activeWindow} setActiveWindow={setActiveWindow} /></>}
        </div>
    )
}