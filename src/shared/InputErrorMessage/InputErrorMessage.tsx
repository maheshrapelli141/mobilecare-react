
type Props = {
    message: string
};

export const InputErrorMessage = ({
    message
}: Props) => {
    return <span>{message || ''}</span>;
}