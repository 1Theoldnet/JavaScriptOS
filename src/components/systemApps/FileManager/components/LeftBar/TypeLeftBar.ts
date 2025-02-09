import { TypeFileSystem } from "../../../../../TypeFileSystem"

export type TypeTypeLeftBar = {
    selectDisk: number
    setSelectDisk: (type: number) => void
    fileSystem: TypeFileSystem
    setFileSystem: (type: TypeFileSystem) => void
}