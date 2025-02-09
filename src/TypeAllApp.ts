export type TypeAllApp = {
    id: number
    icon: string
    appState: 'normal' | 'maxsize' | 'show'
    title: string
    pathLocation: string
    isPwaApp: boolean
    url: string
    sizeApp: number
    positionX: number
    positionY: number
    sizeW: number
    sizeH: number
    children?: () => JSX.Element | JSX.Element[] | null
    sysApp: boolean
}