import React from 'react';
import heroheader from '../../assets/svg/hero-header.svg'
const Hero = () => {
    const headerSvg = heroheader;
    return (
        <section className="hero-area my-10">
        <div className="container flex flex-col justify-center p-20 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around bg-netural-content rounded-2xl shadow-lg">
            <div className="flex flex-col justify-center p-6 text-center rounded-sm  lg:text-left lg:w-6/12">
                <h1 className="text-5xl font-bold leading-none sm:text-6xl">InterView
                    <span className="text-primary"> Quash</span>
                </h1>
                <p className="mt-6 lg:mb-6 sm:mb-12 text-xl text-gray-700">A Place To Test Your
                    <br className="hidden md:inline lg:hidden" /> Theory of  <span className='font-bold text-accent text-2xl'>Programming Languages.</span>
                </p>
                    <p className='text-lg sm:mb-12 mb-12'>
                    A quiz is a form of game or mind sport in which players attempt to answer questions correctly about a certain or variety of subjects. Quizzes can be used as a brief assessment in education and similar fields to measure growth in knowledge, abilities, or skills.
                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                    <a rel="noopener noreferrer" href="#" className="font-semibold rounded btn btn-primary">Start Quiz</a>
                    <a rel="noopener noreferrer" href="#" className="font-semibold border rounded btn btn-outline btn-secondary ">Learn More</a>
                </div>
            </div>
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-128 xl:h-112 2xl:h-128 lg:w-6/12">
                <img src={headerSvg} alt="" className="object-contain h-128" />
            </div>
        </div>
    </section>
    );
};

export default Hero;