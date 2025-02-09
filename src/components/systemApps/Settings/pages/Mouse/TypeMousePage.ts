import { TypeMouseState } from "../../../../../TypeMouseState"

export type TypeMousePage = {
    mouse: TypeMouseState
    setMouse: (type: TypeMouseState) => void
}