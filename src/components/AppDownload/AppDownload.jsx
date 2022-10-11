import React from 'react';

const AppDownload = () => {
    return (
        <section className="bg-accent mt-10">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-lg text-center mx-auto">
          
          <a
            href="/"
            aria-label="Go Home"
            title="Logo"
            className="inline-block mb-4"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-blue-50">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
</svg>

            </div>
          </a>
          <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-32 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="6b0188f3-b7a1-4e9b-b95e-cad916bb3042"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#6b0188f3-b7a1-4e9b-b95e-cad916bb3042)"
                  width="52"
                  height="24"
                />
              </svg>
            </span>{' '}
            Download Our<span className="my-10 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block ml-4">
							<span className="relative md:px-10 text-white md:text-5xl ">Interview Quash</span>
						</span> <br />  App from Below
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
          A quiz is a form of game or mind sport in which players attempt to answer questions correctly about a certain or variety of subjects.
          </p>
          <hr className="my-8 border-gray-300" />
          <div className="flex items-center mb-3 justify-center">
            <a href="/" className="mr-3 transition duration-300 hover:shadow-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1000px-Download_on_the_App_Store_Badge.svg.png"
                className="object-cover object-top w-32 mx-auto"
                alt=""
              />
            </a>
            <a href="/" className="transition duration-300 hover:shadow-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1000px-Google_Play_Store_badge_EN.svg.png"
                className="object-cover object-top w-32 mx-auto"
                alt=""
              />
            </a>
          </div>
          <p className="max-w-xs text-xs text-gray-600 sm:text-sm sm:max-w-sm mx-auto">
            Do Something wonderful for yourself.
          </p>
        </div>
      </div>
      </section>
    );
};

export default AppDownload;