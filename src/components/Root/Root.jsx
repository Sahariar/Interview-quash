import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

    export const SubjectContext = createContext([]);
	export const CorrectAnsCounter = createContext(0);


const Root = () => {
    const {subjects} = useLoaderData();
	const [correctCount , setCorrectCount] = useState(0)
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
			<CorrectAnsCounter.Provider value={[correctCount , setCorrectCount]}>
			<Header />
        	<Outlet />
        	<Footer />
		</CorrectAnsCounter.Provider>
        </SubjectContext.Provider>
       
        </div>
    );
};

export default Root;