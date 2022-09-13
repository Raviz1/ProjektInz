import { FC } from "react";
import { TBoxBgColor } from "../../types/UiTypes";

import './RoundBox.scss'
type TWhiteBoxProps = {
    color?: TBoxBgColor;
    children?: React.ReactNode
}
export const WhiteBox: FC<TWhiteBoxProps> = ({ color = "white", children }) => {
    return (
        <div className={`roundbox-container ${color}`} >
            {children}
        </div>
    )
}