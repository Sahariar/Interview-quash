import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { ToastContainer } from "react-toastify";

    export const SubjectContext = createContext([]);


const Root = () => {
    const {subjects} = useLoaderData();
    return (
        <div className='root-area'>
            		<ToastContainer
				position="top-center"
				autoClose={500}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>
        <SubjectContext.Provider value={subjects}>
        <Header />
        <Outlet />
        <Footer />
        </SubjectContext.Provider>
       
        </div>
    );
};

export default Root;