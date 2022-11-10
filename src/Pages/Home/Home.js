import React from 'react';
import { Helmet } from 'react-helmet-async';
import Services from '../Shared/Services/ServicesHome';
import Appointment from './Appointment';
import Headerbanner from './Headerbanner';
import PracticeArea from './PracticeArea';

const Home = ({ datasize }) => {
    return (
        <div>
            <Helmet>
                <title>Home - Lawyer</title>
            </Helmet>
            <div className="container mx-auto">
                <Headerbanner></Headerbanner>
            </div>
            <div>
                <Services datasize={datasize}></Services>
            </div>
            <div>
                <div className='text-center px-3 md:px-0'>
                    <h1 style={{ fontFamily: "Playfair Display, serif" }} className='md:text-4xl text-3xl flex justify-center text-white text-gray-100'>Practice Area</h1>
                    <p style={{ fontFamily: "Playfair Display, serif" }} className='text-2xl flex justify-center text-gray-400 italic mt-1'>Me always deal with those cases, please stay with us by rating the services.</p>
                </div>
                <PracticeArea></PracticeArea>
            </div>
            <div>
                <div className='text-center px-3 md:px-0'>
                    <h1 style={{ fontFamily: "Playfair Display, serif" }} className='md:text-4xl text-3xl flex justify-center text-white text-gray-100'>Contact Me For Appointment</h1>
                    <p style={{ fontFamily: "Playfair Display, serif" }} className='text-2xl flex justify-center text-gray-400 italic mt-1'>I meet with you face to face, please stay with us by rating the services.</p>
                </div>
                <div>
                    <Appointment></Appointment>
                </div>
            </div>
        </div>
    );
};

export default Home;