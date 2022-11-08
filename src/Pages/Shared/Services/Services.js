import { Button } from 'flowbite-react';
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
                        <Button className='hover:text-black hover:bg-slate-50 border-2 border-slate-50 bg-transparent'>
                            View All Services
                            <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Services;