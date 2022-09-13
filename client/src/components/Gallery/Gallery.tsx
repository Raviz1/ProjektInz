import { FC } from "react"
import ReactImageGallery from "react-image-gallery";
import { IImageInterface } from "../../assets/Interfaces/ImageInterface";

import './Gallery.scss'


interface IGalleryProps {
    images: IImageInterface[]
}

export const Gallery: FC<IGalleryProps> = ({ images }) => {

    const img = images.map((element: IImageInterface) => {
        return { original: element.Url }
    })
    return <div className="gallery-container">
        <ReactImageGallery showThumbnails={false} items={img} />
            
    </div>;

}