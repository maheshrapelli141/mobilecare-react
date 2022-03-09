
type Props = {
    href: string,
    title: string
}

export const AnchorLink = ({
    href,
    title
}: Props) => {
    return <a href={href}>{title}</a>;
}