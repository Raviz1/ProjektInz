

import axios from "axios";
import { FC, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../App";
import { datesArray } from "../../assets/DateDiff";
import { ICarInterface } from "../../assets/Interfaces/CarInterface";
import { Button } from "../../components/Button/Button";
import { CalendarBox } from "../../components/Calendar/Calendar";
import { Gallery } from "../../components/Gallery/Gallery";




import './CarPage.scss'
export const CarPage: FC = () => {
    const { id } = useParams();
    const userCtx = useContext(UserContext)

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
        setReservation([daty[0], daty[1]])
    }
    const reserve = () => {
        if (!userCtx.context) alert("zaloguj się by wynająć samochód")
        // logika zamwiania
        console.log(reservation)
        axios.post("http://localhost:3005/reservation/reserve", {
            dates: reservation,
            carId: car?.id,
            userId: userCtx.context?.id
        })
            .then((response) => {
                console.log(response)
                alert("Samochód został zarezerwowany, pojawił się w Twoich zamówieniach")
            })
            .catch((error) => {
                console.error(error)
            })


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