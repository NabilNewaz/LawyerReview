import { Button, Card, Rating } from 'flowbite-react';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceDetails = () => {
    const ServiceDetails = useLoaderData();

    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <PhotoProvider>
            <div className='container mx-auto md:px-5 px-3 mb-5'>
                <p>service details {ServiceDetails.service_name}</p>

                <div className='w-full mr-5 mb-5 md:mb-0'>
                    <Card>
                        <PhotoView src={ServiceDetails.service_img}>
                            <img className='object-cover h-96 w-full rounded-lg' src={ServiceDetails.service_img} alt="" />
                        </PhotoView>
                        <div>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {ServiceDetails.service_name}
                            </h5>
                            <p className="font-normal text-sm text-gray-700 dark:text-gray-400 mt-1">
                                {ServiceDetails.service_skills}
                            </p>
                        </div>
                        <div>
                            <p className='text-2xl font-semibold dark:text-white'>About This Service</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {ServiceDetails.service_discription}
                            </p>
                        </div>
                        <div className='md:flex items-center justify-between'>
                            <div>
                                <p className='text-2xl font-semibold dark:text-white'>Instructors</p>
                                <p className='text-sm font-semibold dark:text-white'>Instructor rating {ServiceDetails?.service_instructor?.rating}/5 (5,740 Ratings)</p>
                                <div className='flex mt-2'>
                                    {/* <Avatar
                                    img={ServiceDetails.service_instructor.img}
                                    size="lg"
                                    rounded={true}>
                                    <div className="font-medium dark:text-white">
                                        <div>
                                            {ServiceDetails?.service_instructor?.name}
                                        </div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                            {ServiceDetails.service_instructor.designation}
                                        </div>
                                    </div>
                                </Avatar> */}
                                </div>
                            </div>
                            <div className="flex flex-col lg:items-end items-center mt-5 md:mt-12">
                                <div className="md:mb-2 flex items-center">
                                    <Rating className='mr-1'>
                                        <Rating.Star filled={ServiceDetails.service_rating < 1 ? false : true} />
                                        <Rating.Star filled={ServiceDetails.service_rating < 2 ? false : true} />
                                        <Rating.Star filled={ServiceDetails.service_rating < 3 ? false : true} />
                                        <Rating.Star filled={ServiceDetails.service_rating < 4 ? false : true} />
                                        <Rating.Star filled={ServiceDetails.service_rating < 5 ? false : true} />
                                    </Rating>
                                    <span className="rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                                        {ServiceDetails.service_rating}
                                    </span>
                                </div>
                                <p>
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                        <span className='text-3xl font-extrabold mr-1'>৳</span>{ServiceDetails.service_price} BDT
                                    </span>
                                </p>
                            </div>
                        </div>
                        <Link to={`/checkout/${ServiceDetails.service_id}`}>
                            <Button onClick={ScrollToTop} className='w-full'>
                                Get Premium Access
                                <svg
                                    className="ml-2 -mr-1 h-4 w-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Button>
                        </Link>
                    </Card>
                </div>
            </div>
        </PhotoProvider>
    );
};

export default ServiceDetails;