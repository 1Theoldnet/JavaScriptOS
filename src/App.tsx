import { FC, useState } from "react"
import { Desktop } from "./components/Desktop/Desktop"
import { Leftbar } from "./components/LeftBar/LeftBar"
import { TypeAllApp } from "./TypeAllApp"
import { TypeApp } from "./TypeApp"
import { Mouse } from "./components/Mouse/Mouse"
import { HelpBar } from "./components/HelpBar/HelpBar"
import { Browser } from "./components/systemApps/Browser/Browser"
import { Settings } from "./components/systemApps/Settings/Settings"
import { TypeMouseState } from "./TypeMouseState"
import { FileManager } from "./components/systemApps/FileManager/FileManager"
import { TypeFileSystem } from "./TypeFileSystem"
import { JStore } from "./components/systemApps/JStore/JStore"

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
            title: 'Text editor',
            pathLocation: 'Apps:Text editor',
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
            id: 4,
            icon: 'https://img.icons8.com/?size=256&id=12160&format=png',
            title: 'File Manager',
            pathLocation: 'Apps:FileManager',
            isPwaApp: false,
            url: '',
            sizeApp: 512,
            positionX: 200,
            positionY: 30,
            appState: 'normal',
            sizeW: 680,
            sizeH: 580,
            children: () => <FileManager fileSystem={fileSystem} setFileSystem={setFileSystem} />,
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
    
    const [openApps, setOpenApps] = useState<TypeApp[]>([])

    const [activeWindow, setActiveWindow] = useState<number>(0)

    const [mouse, setMouse] = useState<TypeMouseState>({
        speed: 0,
        mousePositionX: 0,
        mousePositionY: 0,
        mouseIndex: 0,
        isEnable: true,
        allMouse: ['https://cdn-icons-png.flaticon.com/512/5425/5425749.png']
    })

    const [fileSystem, setFileSystem] = useState<TypeFileSystem>({
        totalMemory: 500,
        disks: [
            {
                name: 'wd',
                typeFileSystem: 'NTFS',
                isLock: false,
                password: '',
                memory: 50,
                totalMemory: 250,
                folders: [],
                files: []
            },
            {
                name: 'JavaScriptOS',
                typeFileSystem: 'NTFS',
                isLock: false,
                password: '',
                memory: 50,
                totalMemory: 250,
                folders: [
                    {
                        name: 'Desktop',
                        type: 'folder',
                        isLock: false,
                        password: '',
                        folders: [],
                        files: []
                    },
                    {
                        name: 'HelpBar',
                        type: 'folder',
                        isLock: false,
                        password: '',
                        folders: [],
                        files: []
                    },
                    {
                        name: 'Icon',
                        type: 'folder',
                        isLock: false,
                        password: '',
                        folders: [],
                        files: []
                    },
                    {
                        name: 'LeftBar',
                        type: 'folder',
                        isLock: false,
                        password: '',
                        folders: [],
                        files: []
                    },
                    {
                        name: 'Mouse',
                        type: 'folder',
                        isLock: false,
                        password: '',
                        folders: [],
                        files: []
                    },
                    {
                        name: 'systemApps',
                        type: 'folder',
                        isLock: false,
                        password: '',
                        folders: [],
                        files: []
                    }
                ],
                files: [
                  {
                    name: 'boot',
                    typeFile: '.bin',
                    isApp: false,
                    isLock: false,
                    password: '',
                    content: () => '00101011010011010011001010110101010101001101000011010100111010101010101101010101110011010110101101010010101010101010101010001001000010100111011111101010101011010' 
                  },
                  {
                    name: 'readme',
                    typeFile: '.txt',
                    isApp: false,
                    isLock: false,
                    password: '',
                    content: () => 'Hello, world!'
                  },
                  {
                    name: 'start',
                    typeFile: '.bat',
                    isApp: false,
                    isLock: false,
                    password: '',
                    content: () =>  `
                        @echo off
                        npm start
                    `
                  }
                ]
            }
        ]
    })

    return (
        <div onMouseMove={e => setMouse({ ...mouse, mousePositionX: e.clientX, mousePositionY: e.clientY })}>
            <Mouse speed={mouse.speed} x={mouse.mousePositionX} y={mouse.mousePositionY} icon={mouse.allMouse[mouse.mouseIndex]} isEnable={mouse.isEnable} />  
            <Leftbar apps={apps} setApps={setApps} openApps={openApps} setOpenApps={setOpenApps} activeWindow={activeWindow} setActiveWindow={setActiveWindow} />
            <Desktop openApps={openApps} setOpenApps={setOpenApps} activeWindow={activeWindow} setActiveWindow={setActiveWindow} />
            <HelpBar />
        </div>
    )
}