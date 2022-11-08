import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterContent from '../Pages/Shared/FooterContent/FooterContent';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div className='flex flex-col h-screen justify-between'>
            <Header></Header>
            <Outlet></Outlet>
            <FooterContent></FooterContent>
        </div>
    );
};

export default Main;