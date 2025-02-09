import { TypeApp } from "../../TypeApp"

export type TypeDesktop = {
    openApps: TypeApp[]
    setOpenApps: (type: TypeApp[]) => void
    activeWindow: number
    setActiveWindow: (type: number) => void
}