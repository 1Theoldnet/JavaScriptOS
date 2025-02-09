import { FC, useState } from "react"
import './HelpBar.scss'
import { IoIosMenu, IoMdSettings } from "react-icons/io"
import { TbAppsFilled } from "react-icons/tb"
import { FaSun } from "react-icons/fa"
import { IoClose } from "react-icons/io5"

export const HelpBar: FC = () => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <div className="help-bar">
            {open && <div className="help-bar-panel">
                <div className="help-bar-panel-button"><IoMdSettings /></div>
                <div className="help-bar-panel-button"><FaSun /></div>
                <div className="help-bar-panel-button"><TbAppsFilled /></div>
            </div>}
            <div className="help-bar-button" onClick={() => setOpen(!open)}>{open ? <IoClose /> : <IoIosMenu />}</div>
        </div>
    )
}