import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className='bg-neutral-800'>
            <Helmet>
                <title>Page Not Found - Lawyer</title>
            </Helmet>
            <section className="dark:bg-gray-800">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-white">404</h1>
                        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-500 md:text-4xl">Something's missing.</p>
                        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                        <button className="inline-flex text-white bg-neutral-800 border-2 hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">
                            <Link to="/">Back to Homepage</Link>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Notfound;