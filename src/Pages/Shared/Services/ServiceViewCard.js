import { Card, Rating } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceViewCard = ({ service }) => {
    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <div>
            <div>
                <Card
                    className='bg-transparent border-2'
                    horizontal={true}
                    imgSrc={service.service_img}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-100 dark:text-white">
                        {service.service_name}
                    </h5>
                    <p className="font-normal text-gray-300 dark:text-gray-200">
                        {service.service_discription.slice(0, 105)}<Link to={`/service/${service._id}`}><span className='font-semibold'>...Read More</span></Link>
                    </p>
                    <div className="mt-2.5 mb-5 flex items-center">
                        <Rating>
                            <Rating.Star filled={service.service_rating < 1 ? false : true} />
                            <Rating.Star filled={service.service_rating < 2 ? false : true} />
                            <Rating.Star filled={service.service_rating < 3 ? false : true} />
                            <Rating.Star filled={service.service_rating < 4 ? false : true} />
                            <Rating.Star filled={service.service_rating < 5 ? false : true} />
                        </Rating>
                        <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                            {service.service_rating}
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-200 dark:text-white">
                            <span className='text-3xl font-extrabold mr-1'>৳</span>{service.service_price}
                        </span>
                        <Link onClick={ScrollToTop} to={`/service/${service._id}`}
                            className="rounded-lg bg-slate-50 px-3 py-2.5 text-center text-sm font-medium text-clack hover:bg-slate-300 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-800 dark:focus:ring-blue-800">
                            <div className='flex items-center'>
                                <span>View Details</span>
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
                            </div>
                        </Link>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ServiceViewCard;