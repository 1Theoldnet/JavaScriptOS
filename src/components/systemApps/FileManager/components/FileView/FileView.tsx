import { FC, useState } from "react"
import './FileView.scss'
import { TypeTypeFileView } from "./TypeFileView"

export const FileView: FC<TypeTypeFileView> = ({ selectDisk, fileSystem, setFileSystem }) => {    
    const [curentDirectory, setCurentDirectory] = useState(fileSystem.disks[selectDisk])
    const [curentDirectory1, setCurentDirectory1] = useState(curentDirectory)

    return (
        <div className="file-view">
            <div className="file-view-header">

            </div>
            <div className="file-view-main">
                {curentDirectory1.folders.map((folder, i) => <div onClick={() => null} className="folder" key={i}>
                    <img src="https://img.icons8.com/?size=256&id=12160&format=png" width={10} />
                    <b>{folder.name}</b>
                </div>)}
                {curentDirectory1.files.map((file, i) => <div className="file" key={i}>
                    <img src="https://img.icons8.com/?size=256&id=XWoSyGbnshH2&format=png" width={10} />
                    <b>{file.name}</b>
                </div>)}
            </div>
        </div>
    )
}