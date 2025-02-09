import { TypeMouseState } from "../../../TypeMouseState"

export type TypeSettings = {
    mouse: TypeMouseState
    setMouse: (type: TypeMouseState) => void
}