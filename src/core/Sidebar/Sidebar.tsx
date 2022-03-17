import { ROUTESCONTANTS } from 'core/Routes/routes.contants';
import { Link } from 'react-router-dom';
import './style.css'

export const Sidebar = () => {
    const { pathname } = window.location;

    const checkIsActiveRoute = (route: string) => route === pathname ? 'active' : '';

    return (<nav className='sidebar'>
    <ul>
        <li className={checkIsActiveRoute(ROUTESCONTANTS.MESSAGES)}>
            <Link to={ROUTESCONTANTS.MESSAGES}>
                <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-message-contact-flatart-icons-outline-flatarticons.png" height="18px" alt="icon"/>
                Messages
            </Link>
        </li>
        <li className={checkIsActiveRoute(ROUTESCONTANTS.CONTACTS)}>
            <Link to={ROUTESCONTANTS.CONTACTS}>
                <img src="https://img.icons8.com/external-kmg-design-basic-outline-kmg-design/32/000000/external-user-back-to-school-kmg-design-basic-outline-kmg-design.png" height="18px" alt="icon"/>
                Contacts
            </Link>
        </li>
        <li className={checkIsActiveRoute(ROUTESCONTANTS.MY_PATIENTS)}>
            <Link to={ROUTESCONTANTS.MY_PATIENTS}>
                {/* <img src="https://img.icons8.com/ios-filled/50/000000/document--v1.png" /> */}
                <img src="https://img.icons8.com/material-outlined/24/000000/document--v1.png" height="18px" alt="icon" />
                My Patients
            </Link>
        </li>
        <li className={checkIsActiveRoute(ROUTESCONTANTS.ALERTS)}>
            <Link to={ROUTESCONTANTS.ALERTS}>
                <img src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/000000/external-bell-interface-royyan-wijaya-detailed-outline-royyan-wijaya.png" height="18px" alt="icon"/>
                Alerts
            </Link>
        </li>
        <li className={checkIsActiveRoute(ROUTESCONTANTS.ASSIGNMENTS)}>
            <Link to={ROUTESCONTANTS.ASSIGNMENTS}>
                <img src="https://img.icons8.com/pastel-glyph/64/000000/check-file--v2.png" height="18px" alt="icon"/>
                Assignments
            </Link>
        </li>
    </ul>
</nav>)};