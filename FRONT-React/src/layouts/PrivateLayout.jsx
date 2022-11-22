import React from 'react';
// import { Outlet } from 'react-router';


const PrivateLayout = ({children}) => {
    return (
        <div>
            <h3>Este es el private Layout:</h3>
            {children}
        </div>
    );
};

export default PrivateLayout;