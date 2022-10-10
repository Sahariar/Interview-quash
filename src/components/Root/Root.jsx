import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Root = () => {
    return (
        <div className='root-area'>
            <Header />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default Root;