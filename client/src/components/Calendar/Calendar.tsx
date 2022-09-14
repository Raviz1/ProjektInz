import { FC, useEffect, useState } from "react";
import { Calendar } from 'react-calendar';
import './Calendar.scss'
import 'react-calendar/dist/Calendar.css';
import { ITerminy } from "../../assets/Interfaces/TerminyInterface";
import { datesArray } from "../../assets/DateDiff";

interface ICalendarProps {
    Lents: ITerminy[] | undefined
    change: (daty: Date[]) => void
}


export const CalendarBox: FC<ICalendarProps> = ({ Lents, change }) => {
    const [value, setValue] = useState(new Date());
    const [disabled, setDisabled] = useState<Array<Array<Date>> | null>(null)
    const disabledTiles = () => {
        let arr: any[] = []
        Lents?.forEach((element: ITerminy) => {
            let daty = datesArray(new Date(element.DataStart), new Date(element.DataZwrotu))
            arr.push(daty)
        })
        setDisabled(arr)
    }
    const onChange = (e: any) => {
        change(e)
    }
    useEffect(() => {
        disabledTiles()
    }, [])
    return <div className="calendar-container">
        {disabled &&
            <Calendar selectRange={true}
                returnValue={"range"}
                tileDisabled={({ date, view }) =>
                    (view === 'month') && // Block day tiles only
                    disabled[0].some(disabledDate => {
                        return date.getFullYear() === disabledDate.getFullYear() &&
                            date.getMonth() === disabledDate.getMonth() &&
                            date.getDate() === disabledDate.getDate()
                    }

                    )}
                onChange={onChange} value={value} />
        }
    </div>
}