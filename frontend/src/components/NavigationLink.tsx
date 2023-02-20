import React from 'react';
import { NavLink } from "react-router-dom";

type Props = {
    to: string;
    label: string;
};

const NavigationLink: React.FC<Props> = ({ to, label }) => {
    return (
        <li>
            <NavLink to={to} className={({ isActive }) => isActive ? 'active' : ''}>
                {label}
            </NavLink>
        </li>
    );
}

export default NavigationLink;