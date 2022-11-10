import React from 'react';
import { Link } from 'react-router-dom';
import ServicesView from './ServicesView';
import { HiOutlineArrowRight } from "react-icons/hi";

const Services = ({ datasize }) => {
    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <div className='pt-16'>
            <div className='text-center'>
                <h1 style={{ fontFamily: "Playfair Display, serif" }} className='md:text-4xl text-3xl flex justify-center text-white text-gray-100'>The Services I Provide</h1>
                <p style={{ fontFamily: "Playfair Display, serif" }} className='text-2xl flex justify-center text-gray-400 italic mt-1'>I provide the following services, please stay with us by rating the services.</p>
            </div>
            <ServicesView datasize={datasize}></ServicesView>
            <div className='w-fit mx-auto mb-6'>
                <Link onClick={ScrollToTop} to={`/services`}>
                    <div>
                        <button className="inline-flex text-white bg-neutral-800 border-2 hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">
                            <div className='flex'>
                                <span>View All Services</span>
                                <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                            </div>
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Services;