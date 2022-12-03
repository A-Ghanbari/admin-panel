import { isEmpty } from "lodash"
import { useState, useEffect } from "react"

export default function PhotoGallery({ data }) {
    const [photo, setPhoto] = useState()

    useEffect(() => {
        if (isEmpty(data)) {
            return null
        } else {
            setPhoto(data[0].FilePath)
        }
    }, [])

    return (
        <div className="product-photo">
            <img src={photo} />
            {data.length > 1 &&
                <div className="product-photo-gallery">
                    {data.map(res => (
                        (res.FileType === 1) ?
                            <img src={res.FilePath} key={res.ID} onClick={() => setPhoto(res.FilePath)} />
                            :
                            <video width="180" height="120" key={res.ID} controls>
                                <source src={res.FilePath} type="video/mp4" />
                            </video>
                    ))}
                </div>
            }
        </div>
    )
}
