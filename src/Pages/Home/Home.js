import React from 'react';
import Services from '../Services/Services';
import Headerbanner from './Headerbanner';

const Home = () => {
    return (
        <div>
            <div className="container mx-auto">
                <Headerbanner></Headerbanner>
            </div>
            <div>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;