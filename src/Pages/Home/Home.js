import React from 'react';
import { Helmet } from 'react-helmet-async';
import Services from '../Shared/Services/ServicesHome';
import Headerbanner from './Headerbanner';

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
        </div>
    );
};

export default Home;