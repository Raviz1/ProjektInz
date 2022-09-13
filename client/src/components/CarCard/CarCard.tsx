import { FC } from "react";
import { Link } from "react-router-dom";
import { ICarInterface } from "../../assets/Interfaces/CarInterface";



import './CarCard.scss'
export const CarCard: FC<ICarInterface> = ({ Images, Colour, FuelType, MakeYear, Model, id }) => {
    return <div className="carCard-container">
        <img src={Images[0].Url} alt={"image"} />
        <p>Model :{Model}</p>
        <p>Rok Produkcji:{MakeYear.toString()}</p>
        <p>Silnik: {FuelType}</p>
        <p>Kolor: {Colour}</p>
        <Link to={`/car/${id}`}>Sprawdź ofertę!</Link>
    </div>
} 