import './style.css';

export const Header = () => {
    return <nav>
        <div className='logo-section'>
            <img src='https://agnityglobal.com/wp-content/uploads/2016/01/agnity_logo_1_lg200.png' alt='logo' height="36px" />
        </div>
        <div className='center-content'>
            <img className='edit' src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-edit-mintab-for-ios-becris-lineal-becris.png" alt='edit' height="18px" />
            <form className="nosubmit">
                <input className="nosubmit" type="search" placeholder="Search..." />
            </form>

        </div>
        <div className='account-details'>
        <img className='notification' src="https://img.icons8.com/windows/32/000000/appointment-reminders--v1.png" alt='18px'/>
        <div className='user-details'>
            <img src='https://www.seekpng.com/png/full/237-2370916_hud-avatar-snow-wolf-wolf-online-simulator-wolves.png' alt='avatar' height="36px" />
            <div className='user-status'>
                <span>Mahesh Rapelli</span>
                <span>Online</span>
            </div>
        </div>
        </div>
    
    </nav>;
};