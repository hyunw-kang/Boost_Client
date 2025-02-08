import React from 'react';
import { createBrowserRouter,Navigate } from 'react-router-dom';
import Detailpage  from './pages/Detailpage';
import MakeGroutppage from './pages/MakeGrouppage';

const router = createBrowserRouter([
    { path : "/detail", element: <Detailpage/>},
    { path : "/makegroup", element: <MakeGroutppage/>},
]);

export default router;
