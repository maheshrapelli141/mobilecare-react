import GridCard from "shared/GridCard"

type Props = {
    data?: Array<any>
}

export const GridView = ({
    data
}: Props) => {
    return <>
    {(data || [...new Array(100)].fill(null)).map(item => <GridCard
        imgSrc="https://www.pinkvilla.com/imageresize/fotojet_19_23.jpg?width=752&format=webp&t=pvorg"
        name="Mahesh Rapelli"
        age={24}
        gender="male"
        isFlagged={false}
        isStarred={true}
        mrn="2342342"
        />)}
        </>
}