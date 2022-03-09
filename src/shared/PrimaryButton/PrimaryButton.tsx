
type Props = {
    type: 'button' | 'submit' | 'reset',
    title: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export const PrimaryButton = ({
    type,
    title,
    onClick
}: Props) => {
    return <button type={type} onClick={onClick}>{title}</button>
}