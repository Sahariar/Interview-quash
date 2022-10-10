import React from 'react';
import AppDownload from '../AppDownload/AppDownload';
import Hero from '../Hero/Hero';
import Subjects from '../Subjects/Subjects';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Subjects></Subjects>
            <AppDownload></AppDownload>
        </div>
    );
};

export default Home;