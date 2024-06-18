import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Menu from './Menu/Index';
import Game from './Game/Index';

const router = createBrowserRouter([
    {
        path: '/app',
        element: <Menu />
    }, 
    {
        path: '/app/game',
        element: <Game />
    }
]);

export default function Routes() {
    return (
        <RouterProvider router={router} />
    )
}