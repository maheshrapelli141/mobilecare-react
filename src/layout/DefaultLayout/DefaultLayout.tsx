import Footer from "../../core/Footer"
import Header from "../../core/Header"
import Sidebar from "../../core/Sidebar"

type Props  = React.PropsWithChildren<{}>;

export const DefaultLayout = ({
    children
}: Props) => {
    return (
        <>
            <Header />
            <Sidebar />
            {children}
            <Footer />
        </>
    )
}