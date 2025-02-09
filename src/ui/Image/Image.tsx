import { FC } from "react"
import './Image.scss'
import { TypeImage } from "./TypeImage"

export const Image: FC<TypeImage> = ({ width, height, image }) => <img className="image" width={width} height={height} src={image} />