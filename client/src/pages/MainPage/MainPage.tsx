import axios from "axios";
import { FC, useEffect, useState } from "react";
import { ICarInterface } from "../../assets/Interfaces/CarInterface";
import { CarCard } from "../../components/CarCard/CarCard";

import './MainPage.scss'
export const MainPage: FC = () => {
    useEffect(() => {
        axios.get('http://localhost:3005/cars/all')
            // TODO add interfaces for apis 
            .then((response) => {
                const { cars } = response.data
                console.log(cars)
                setCars(cars)
            })
    }, [])

    const [cars, setCars] = useState<null | ICarInterface[]>(null)
    return (
        <div className="mainPage-container">
            {cars && cars.map((el: ICarInterface) => {
                return <CarCard Images={el.Images} id={el.id} key={el.id} Colour={el.Colour} FuelType={el.FuelType} MakeYear={el.MakeYear} Model={el.Model} />
            })}
        </div>
    )
}