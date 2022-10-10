import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../components/Blog/Blog';
import Home from '../components/Home/Home';
import NotFound from '../components/NotFound/NotFound';
import Root from '../components/Root/Root';
import Statistics from '../components/Statistics/Statistics';
import Subjects from '../components/Subjects/Subjects';
import { dataLoader } from './DataLoader';



const router = createBrowserRouter([
    {
        path:'/',
        element:<Root />,
        loader:dataLoader,
        children:[
            {
            path:'/',
            element:<Home />
        },
        {
            path:'subjects',
            element:<Subjects />
        },
        {
            path:'statistics',
            element:<Statistics />
        },
        {
            path:'blog',
            element:<Blog />
        }
    ]     
},
{
    path:'*',
    element:<NotFound />
}
]);


export default router;