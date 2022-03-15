import { useState } from 'react';
import GridView from 'shared/GridView';
import './style.css';

type Props = {
    patients?: Array<any>
};

export const PatientsList = ({
    patients
}: Props) => {
    const [selfActiveTab,switchTab] = useState(true);

    const switchToSelfTab = () => switchTab(true);
    const switchToGroupTab = () => switchTab(false);

    return <div className="patients-list">
        <ul className="view-type-list">
            <li className={selfActiveTab ? 'active' : ''} onClick={switchToSelfTab}>
                <strong>Self (323)</strong>
            </li>
            <li className={selfActiveTab ? '' : 'active'} onClick={switchToGroupTab}>
                <strong>Group (323)</strong>
            </li>
        </ul>
        {selfActiveTab ? <GridView data={patients} /> : <>Listview</>}
    </div>
}