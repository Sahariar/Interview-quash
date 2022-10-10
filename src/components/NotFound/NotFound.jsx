import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className="flex items-center min-h-screen bg-secondary p-16 ">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
                <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                    <span className="sr-only">Error</span>404
                </h2>
                <p className="text-2xl font-semibold md:text-3xl">
                    Sorry, we couldn't find this page.
                </p>
                <p className="text-3xl">
                    Looks like you are going somewhere we can't found the Path
                </p>
                <p className="mt-4 mb-8 dark:text-gray-400">
                    But don't worry, you can find plenty of other things on our homepage.{" "}
                </p>
                <Link to={"/"}>
                    <span className="px-8 py-3 font-semibold rounded btn btn-primary">
                        Back to homepage
                    </span>
                </Link>
            </div>
        </div>
    </section>

    );
};

export default NotFound;