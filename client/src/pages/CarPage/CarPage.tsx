

import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ICarInterface } from "../../assets/Interfaces/CarInterface";
import { Gallery } from "../../components/Gallery/Gallery";




import './CarPage.scss'
export const CarPage: FC = () => {
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:3005/cars/${id}`)
            .then((response) => {
                setCar(response.data.car[0])
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    const [car, setCar] = useState<null | ICarInterface>()
    return <div className="carPage-container">
        {
            car && <div>
                <Gallery images={car.Images} />
                <p>Model :{car.Model}</p>
                <p>Rok Produkcji:{car.MakeYear.toString()}</p>
                <p>Silnik: {car.FuelType}</p>
                <p>Kolor: {car.Colour}</p>
            </div>
        }
    </div>
} 