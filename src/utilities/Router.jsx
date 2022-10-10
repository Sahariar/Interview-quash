import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../components/Blog/Blog';
import NotFound from '../components/NotFound/NotFound';
import Root from '../components/Root/Root';



const router = createBrowserRouter([
    {
        path:'/',
        element:<Root />,
        children:[{
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