import { TypeAllApp } from "./TypeAllApp"
import { TypeApp } from "./TypeApp"

export type TypeUser = {
    id: number,
    avatar: string,
    name: string,
    description: string,
    password: string,
    apps: TypeAllApp[],
    links: string[]
    desktops: TypeDesktop[]
}

export type TypeDesktop = {
    id: number,
    name: string,
    background: string,
    openApps: TypeApp[]
}