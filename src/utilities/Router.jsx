import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../components/Blog/Blog';
import Home from '../components/Home/Home';
import NotFound from '../components/NotFound/NotFound';
import Root from '../components/Root/Root';
import Statistics from '../components/Statistics/Statistics';
import Subjects from '../components/Subjects/Subjects';
import SubjectTestLay from '../components/SubjectTestLay/SubjectTestLay';
import { dataLoader, dataLoaderWithParam } from './DataLoader';



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
            path:'subjects/:id',
            loader: async({params}) => {
                console.log(params.subjectsId);
               return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
            },
            element:<SubjectTestLay />
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