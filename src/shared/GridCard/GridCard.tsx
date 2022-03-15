import { useState } from "react";

type Props = {
    imgSrc: string,
    name: string,
    age: number,
    gender: string,
    mrn: string | number,
    isStarred: boolean,
    isFlagged: boolean
};

export const GridCard = ({
    imgSrc,
    name,
    age,
    gender,
    mrn,
    isStarred,
    isFlagged
}: Props) => {
    const [src,setSrc] = useState(imgSrc);
    return <div>
        <img src={src} height="100%" width="50px" alt={name} onError={() => setSrc('https://cdn-icons-png.flaticon.com/512/147/147140.png')} />
        <div className="details">
            <h4>{name}</h4>
            <p>{age} | {gender}</p>
            <p>MRN: {mrn}</p>
        </div>
        <div className="card-flags-section">
            {isStarred 
            ? <img src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Star_Gold_Dark-512.png" alt="star" height="32px" />
            : <img src="https://cdn3.iconfinder.com/data/icons/interface-button/64/star-sign-symbol-circle_1-512.png" alt="un-star" height="32px" />}
        {isFlagged
        ?
        <img src="https://cdn1.iconfinder.com/data/icons/japan-10/64/Flag-japan-red-circle-white-country-512.png" height="24px" alt="flag" />
        :
        <img src="https://cdn1.iconfinder.com/data/icons/japan-12/64/Flag-japan-red-circle-white-country-512.png" height="24px" alt="flag" />
        }
        </div>
    </div>
}