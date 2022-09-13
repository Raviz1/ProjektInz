import React, { FC } from "react";
import { TBoxBgColor } from "../../types/UiTypes";
import './Button.scss'

interface TButtonProps {
    color?: TBoxBgColor;
    text?: string
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}
export const Button: FC<TButtonProps> = ({ color = "white", onClick, text }) => {
    return (
        <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => onClick(e)} >{text}</button>
    )
}