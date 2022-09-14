

import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { datesArray } from "../../assets/DateDiff";
import { ICarInterface } from "../../assets/Interfaces/CarInterface";
import { Button } from "../../components/Button/Button";
import { CalendarBox } from "../../components/Calendar/Calendar";
import { Gallery } from "../../components/Gallery/Gallery";




import './CarPage.scss'
export const CarPage: FC = () => {
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:3005/cars/${id}`)
            .then((response) => {
                setCar(response.data.car[0])
                console.log(response.data.car[0])

            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    const change = (daty: Date[]) => {
        setReservation(datesArray(daty[0], daty[1]))
    }
    const reserve = () => {

    }

    const [car, setCar] = useState<null | ICarInterface>()
    const [reservation, setReservation] = useState<Array<Date> | null>(null)
    //test
    useEffect(() => {

    }, [reservation])

    return <div style={{ flex: 1 }}>
        {
            car &&
            <div className="carPage-container">
                <Gallery images={car.Images} />
                <div>
                    <p>Model :{car.Model}</p>
                    <p>Rok Produkcji:{car.MakeYear.toString()}</p>
                    <p>Silnik: {car.FuelType}</p>
                    <p>Kolor: {car.Colour}</p>
                </div>
                <div>
                    <CalendarBox Lents={car.Lents} change={change} />
                    <Button onClick={reserve} text={"Zarezerwuj"} />
                </div>

            </div>
        }
    </div>
} 