import { FC } from "react"
import './Button.scss'
import { TypeButton } from "./TypeButton"

export const Button: FC<TypeButton> = ({ isDisabled, onClick, text }) => <button className="button" disabled={isDisabled} onClick={onClick}>{text}</button>