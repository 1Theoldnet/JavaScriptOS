import { FC, useState } from "react"
import './FileManager.scss'
import { TypeFileManager } from "./TypeFileManager"
import { LeftBar } from "./components/LeftBar/LeftBar"
import { FileView } from "./components/FileView/FileView"

export const FileManager: FC<TypeFileManager> = ({ fileSystem, setFileSystem }) => {
    const [selectDisk, setSelectDisk] = useState<number>(0)
    
    return (
        <div className="file-manager">
            <LeftBar selectDisk={selectDisk} setSelectDisk={setSelectDisk} fileSystem={fileSystem} setFileSystem={setFileSystem} />
            <FileView selectDisk={selectDisk} fileSystem={fileSystem} setFileSystem={setFileSystem} />
        </div>
    )
}