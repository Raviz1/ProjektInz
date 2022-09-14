import { IImageInterface } from "./ImageInterface";
import { ITerminy } from "./TerminyInterface";



export interface ICarInterface {
    id: number,
    Model: string,
    MakeYear: Date,
    Colour: string,
    FuelType: string,
    Images: IImageInterface[],
    Lents?: ITerminy[]
}