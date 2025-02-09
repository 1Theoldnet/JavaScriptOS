import { TypeApp } from "../../TypeApp"

export type TypeOpenApp = {
    appState: 'normal' | 'maxsize' | 'show'
    openApps: TypeApp[]
    setOpenApps: (type: TypeApp[]) => void
    index: number
    activeWindow: number
    setActiveWindow: (type: number) => void
    id: number
    icon: string
    title: string
    isPwaApp: boolean
    url: string
    positionX: number
    positionY: number
    sizeW: number
    sizeH: number
    children: () => JSX.Element | JSX.Element[] | null
}