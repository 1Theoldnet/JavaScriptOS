export type TypeApp = {
    id: number
    icon: string
    title: string
    isPwaApp: boolean
    url: string
    positionX: number
    positionY: number
    appState: 'normal' | 'maxsize' | 'show'
    sizeW: number
    sizeH: number
    children: () => JSX.Element | JSX.Element[] | null
}