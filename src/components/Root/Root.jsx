import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

    export const SubjectContext = createContext([]);


const Root = () => {
    const {subjects} = useLoaderData();

    return (
        <div className='root-area'>
        <SubjectContext.Provider value={subjects}>
        <Header />
        <Outlet />
        <Footer />
        </SubjectContext.Provider>
       
        </div>
    );
};

export default Root;