import React from 'react';
import { createBrowserRouter,Navigate } from 'react-router-dom';
import Detailpage  from './pages/Detailpage';

const router = createBrowserRouter([
    { path : "/detail", element: <Detailpage/>},
]);

export default router;
