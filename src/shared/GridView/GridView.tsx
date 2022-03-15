import GridCard from "shared/GridCard"

type Props = {
    data: Array<any>
}

export const GridView = ({
    data
}: Props) => {
    return <>
    {data.map(item => <GridCard
        imgSrc={item.avatar}
        name={item.name}
        age={item.age}
        gender={item.gender}
        isFlagged={item.isFlagged}
        isStarred={item.isStarred}
        mrn={item.mrn}
        />)}
        </>
}