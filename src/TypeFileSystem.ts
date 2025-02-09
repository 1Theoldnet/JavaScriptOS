type TypeDisk = {
    name: string
    typeFileSystem: 'NTFS' | 'FAT' | 'FAT16' | 'FAT32'
    memory: number
    totalMemory: number
    isLock: boolean
    password: string
    folders: TypeFolder[]
    files: TypeFile[]
}

type TypeFile = {
    name: string
    isApp: boolean
    isLock: boolean
    password: string
    typeFile: '.bin' | '.txt' | '.app' | '.ts' | '.js' | '.tsx' | '.jsx' | '.bat'
    content: () => JSX.Element | JSX.Element[] | string
}

type TypeFolder = {
    name: string
    type: 'folder'
    isLock: boolean
    password: string
    folders: TypeFolder[]
    files: TypeFile[]
}

export type TypeFileSystem = {
    totalMemory: number
    disks: TypeDisk[]
}