import { FC, HTMLInputTypeAttribute } from "react";
import { TBoxBgColor } from "../../types/UiTypes";

interface TInputProps {
    color?: TBoxBgColor;
    type: HTMLInputTypeAttribute,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<TInputProps> = ({ type, onChange, color = "white" }) => {
    return (
        <input type={type} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)} />
    )
}