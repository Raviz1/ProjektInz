


import axios from 'axios'
import { FC, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../App'
import { setAuthToken } from '../../assets/AuthToken'
import { ICarInterface } from '../../assets/Interfaces/CarInterface'
import './Zamowienia.scss'


interface IZamowieniaResponse {
    id: number,
    DataStart: Date,
    DataZwrotu: Date,
    car: ICennikCar,
}

interface ICennikCar extends ICarInterface {
    Cennik: {
        id: number,
        Cena: number
    }
}

interface IZamowieniaProps {
    url: string,
    title: string,
}

export const Zamowienia: FC<IZamowieniaProps> = ({ url, title }) => {
    const ctx = useContext(UserContext)
    // zamownienia
    useEffect(() => {
        // zapomina o tokenie
        axios.post<IZamowieniaResponse[]>(url,
            { userId: ctx.context?.id },
            {
                headers: {
                    "x-access-token": localStorage.getItem("token")?.toString() || ""
                }
            }
        ).then((response) => {
            console.log(response.data)
            setState(response.data)
        }).catch((error) => {
            console.error(error)
        })
    }, [])

    const [state, setState] = useState<IZamowieniaResponse[] | null>(null)
    return (<div className='zamowienia-container'>
        <h1>{title}</h1>
        {state &&
            <div className='zamowienia'>

                <table>
                    <tr>
                        <th>Model</th>
                        <th>Data Start</th>
                        <th>Data Stop</th>
                    </tr>

                    {
                        state.map((element: IZamowieniaResponse) => {
                            return <Row id={element.id} DataStart={element.DataStart} DataZwrotu={element.DataZwrotu} car={element.car} />
                        })
                    }
                </table>

            </div>}
    </div>)
}


const Row: FC<IZamowieniaResponse> = (props) => {
    return (
        <tr>
            <td><Link to={`/car/${props.id}`}>{props.car.Model}</Link></td>
            <td>{new Date(props.DataStart).toDateString()}</td>
            <td>{new Date(props.DataZwrotu).toDateString()}</td>
        </tr>
    )
}