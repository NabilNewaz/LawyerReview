import React from 'react';

const Headerbanner = () => {
    return (
        <div className='md:mt-5 md:mx-5 mt-1 mx-3 md:mx-0 mb-5'>
            <div className='flex flex-col lg:flex-row justify-center items-center mt-3'>
                <div>
                    <div style={{ fontFamily: "Playfair Display, serif" }} className='md:text-6xl text-4xl text-slate-200'>
                        <p>High Quality Law</p>
                        <p className='lg:mt-1'>Advice And Support</p>
                    </div>
                    <p className='md:text-2xl mb-4 text-slate-200 lg:mt-2 mt-1 italic font-semibold'>Leading Polish Lawyer in Your City</p>
                </div>
                <div>
                    <img className='rounded-xl object-fill lg:ml-20 mx-auto w-10/12 md:w-full' alt="headerbanner" src="headerbanner_man.png"></img>
                </div>
            </div>
        </div >
    );
};

export default Headerbanner;