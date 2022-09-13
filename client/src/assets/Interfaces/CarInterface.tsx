import { IImageInterface } from "./ImageInterface";



export interface ICarInterface {
    id: number,
    Model: string,
    MakeYear: Date,
    Colour: string,
    FuelType: string,
    Images: IImageInterface[],

}