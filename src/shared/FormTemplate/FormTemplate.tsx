import React from 'react';
import './style.css';

type Props = React.PropsWithChildren<{}>;

export const FormTemplate = ({
    children
}: Props) => {
    return <>{children}</>
}