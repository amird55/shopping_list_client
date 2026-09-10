import React from 'react';
import { Outlet, useMatches } from "react-router";

function AppLayout() {
    return (
        <>
            <h1>AppLayout</h1>
            <Outlet />
            <h3>footer</h3>
        </>
    );
}

export default AppLayout;