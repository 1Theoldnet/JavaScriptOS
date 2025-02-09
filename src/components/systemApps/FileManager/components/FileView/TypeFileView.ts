import { TypeFileSystem } from "../../../../../TypeFileSystem"

export type TypeTypeFileView = {
    selectDisk: number
    fileSystem: TypeFileSystem
    setFileSystem: (type: TypeFileSystem) => void
}