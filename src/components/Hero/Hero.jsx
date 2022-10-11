import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import lottie from "lottie-web";
import headerAnimation from "../../assets/headeranimation.json";
const Hero = () => {

	useEffect(() => {
		const instance = lottie.loadAnimation({
			container: document.querySelector("#headerAnimation"),
			animationData: headerAnimation,
			renderer: "svg", // "canvas", "html"
			loop: true, // boolean
			autoplay: true, // boolean
		  });

		
		return () => instance.destroy();
	  }, []);
	return (
		<section className="hero-area my-10">
			<div className="container flex flex-col justify-center sm:p-5 md:p-20 mx-auto sm:py-12 bg-blue-50 lg:py-24 lg:flex-row lg:justify-around rounded-2xl shadow-lg">
				<div className="flex flex-col justify-center p-6 text-center rounded-sm  lg:text-left lg:w-6/12">
					<h1 className="text-5xl font-bold leading-none sm:text-6xl">
						InterView
						<span className="text-primary"> Quash</span>
					</h1>
					<p className="mt-6 lg:mb-6 sm:mb-12 text-xl text-gray-700">
						A Place To Test Your
						<br className="hidden md:inline lg:hidden" /> Theory of
						<span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-accent relative inline-block ml-4">
							<span className="relative "> Programming Languages.</span>
						</span>
					</p>
					<p className="text-lg sm:mb-12 mb-12">
						A quiz is a form of game or mind sport in which players attempt to
						answer questions correctly about a certain or variety of subjects.
					</p>
					<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
						<NavLink className="font-semibold rounded btn btn-primary" to={'subjects'}>Start Quiz</NavLink>
						<NavLink to={'blog'} className="font-semibold border rounded btn btn-outline btn-info">	Learn More</NavLink>
					</div>
				</div>
				<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-128 xl:h-112 2xl:h-128 lg:w-6/12">
				<div id="headerAnimation" />
			
				
				</div>
			</div>
		</section>
	);
};

export default Hero;
