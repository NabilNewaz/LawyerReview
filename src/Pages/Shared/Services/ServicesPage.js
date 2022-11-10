import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServicesView from './ServicesView';

const ServicesPage = () => {
    return (
        <div>
            <Helmet>
                <title>Services - Lawyer</title>
            </Helmet>
            <ServicesView></ServicesView>
        </div>
    );
};

export default ServicesPage;