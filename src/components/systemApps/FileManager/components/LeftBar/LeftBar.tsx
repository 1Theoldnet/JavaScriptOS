import { FC } from "react"
import './LeftBar.scss'
import { TypeTypeLeftBar } from "./TypeLeftBar"

export const LeftBar: FC<TypeTypeLeftBar> = ({ selectDisk, setSelectDisk, fileSystem, setFileSystem }) => {
    return (
        <div className="file-manager-left-bar">
            <button className="add-disk"><b>Добавить диск</b></button>
            <button className="delete-disk"><b>Удалить диск</b></button>
            
            <div className="disks">
                {fileSystem.disks.map((disk, i) => <div key={i} className={selectDisk === i ? 'disk-active' : "disk"} onClick={() => setSelectDisk(i)}>
                    <img src="https://img.icons8.com/?size=256w&id=12212&format=png" />
                    <b>{disk.name}</b>
                </div>)}
            </div>
        </div>
    )
}