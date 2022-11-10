import React from 'react';
import { BsFillBriefcaseFill } from "react-icons/bs";
import { AiFillBank } from "react-icons/ai";
import { MdFamilyRestroom } from "react-icons/md";
import { RiBookFill } from "react-icons/ri";

const PracticeArea = () => {
    return (
        <div className='container mx-auto md:px-5 px-3 grid lg:grid-cols-4 md:grid-cols-2 gap-4 mt-5 mb-12'>
            <div className='bg-[url("https://preview.colorlib.com/theme/lawyer/img/practice/1.png")] opacity-80 flex flex-col items-center border-2 rounded-lg bg-no-repeat bg-center p-16'>
                <BsFillBriefcaseFill className='text-9xl text-white'></BsFillBriefcaseFill>
                <p className='text-2xl text-white font-bold'>Business Law</p>
                <p className='text-1xl text-center text-white'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
            </div>
            <div className='bg-[url("https://preview.colorlib.com/theme/lawyer/img/practice/2.png")] opacity-80 flex flex-col items-center border-2 rounded-lg bg-no-repeat bg-center p-16'>
                <AiFillBank className='text-9xl text-white'></AiFillBank>
                <p className='text-2xl text-white font-bold'>Finance Law</p>
                <p className='text-1xl text-center text-white'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
            </div>
            <div className='bg-[url("https://preview.colorlib.com/theme/lawyer/img/practice/3.png")] opacity-80 flex flex-col items-center border-2 rounded-lg bg-no-repeat bg-center p-16'>
                <MdFamilyRestroom className='text-9xl text-white'></MdFamilyRestroom>
                <p className='text-2xl text-white font-bold'>Family Law</p>
                <p className='text-1xl text-center text-white'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
            </div>
            <div className='bg-[url("https://preview.colorlib.com/theme/lawyer/img/practice/4.png")] opacity-80 flex flex-col items-center border-2 rounded-lg bg-no-repeat bg-center p-16'>
                <RiBookFill className='text-9xl text-white'></RiBookFill>
                <p className='text-2xl text-white font-bold'>Education Law</p>
                <p className='text-1xl text-center text-white'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
            </div>
        </div>
    );
};

export default PracticeArea;