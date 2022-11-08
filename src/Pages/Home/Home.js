import React from 'react';
import Services from '../Shared/Services/Services';
import Headerbanner from './Headerbanner';

const Home = ({ datasize }) => {
    return (
        <div>
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