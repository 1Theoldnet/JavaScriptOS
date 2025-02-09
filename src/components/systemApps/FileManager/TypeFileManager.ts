import { TypeFileSystem } from "../../../TypeFileSystem"

export type TypeFileManager = {
    fileSystem: TypeFileSystem
    setFileSystem: (type: TypeFileSystem) => void
}