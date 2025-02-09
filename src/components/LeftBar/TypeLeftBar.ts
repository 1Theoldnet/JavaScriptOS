import { TypeAllApp } from "../../TypeAllApp"
import { TypeApp } from "../../TypeApp"

export type TypeLeftBar = {
    apps: TypeAllApp[]
    setApps: (type: TypeAllApp[]) => void
    openApps: TypeApp[]
    setOpenApps: (type: TypeApp[]) => void
    activeWindow: number
    setActiveWindow: (type: number) => void
}