import Footer from "../../core/Footer"
import Header from "../../core/Header"
import Sidebar from "../../core/Sidebar"
import './style.css';

type Props  = React.PropsWithChildren<{}>;

export const DefaultLayout = ({
    children
}: Props) => {
    return (
        <>
            <Header />
            <div className="content-section">
                <Sidebar />
                {children}
            </div>
            <Footer />
        </>
    )
}