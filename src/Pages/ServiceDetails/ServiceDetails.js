import { Card, Rating, Spinner } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import ReviewsView from './ReviewsView';
import { MdRateReview } from "react-icons/md";
import toast from 'react-hot-toast';


const ServiceDetails = () => {
    const ServiceDetails = useLoaderData();
    const [serviceReviews, setServiceReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = `http://localhost:5000/reviews/${ServiceDetails._id}`;
        fetch(url)
            .then((response) => response.json())
            .then((actualData) => {
                setServiceReviews(actualData);
                setLoading(false);
            })
            .catch((err) => {
                toast.error(err.message);
            });
    }, [ServiceDetails._id, loading]);

    return (
        <PhotoProvider>
            <div className='container mx-auto md:px-5 px-3 mb-5 mt-5'>
                <div className='w-full mr-5 mb-5 md:mb-0'>
                    <Card className='bg-transparent border-2'>
                        <PhotoView src={ServiceDetails.service_img}>
                            <img className='object-cover h-96 w-full rounded-lg' src={ServiceDetails.service_img} alt="" />
                        </PhotoView>
                        <div>
                            <h5 className="text-3xl font-bold tracking-tight text-white">
                                {ServiceDetails.service_name}
                            </h5>
                        </div>
                        <div>
                            <p className='text-2xl font-semibold text-gray-200'>About This Service</p>
                            <p className="font-normal text-gray-400">
                                {ServiceDetails.service_discription}
                            </p>
                        </div>
                        <div className="flex flex-col mt-5 md:mt-3">
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
                                <span className="text-3xl font-bold text-gray-100 dark:text-white">
                                    <span className='text-3xl text-gray-100 font-extrabold mr-1'>৳</span>{ServiceDetails.service_price} BDT
                                </span>
                            </p>
                        </div>
                        <div className='items-center justify-between mt-2'>
                            <div>
                                <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                                    <div>
                                        <p className='text-3xl font-semibold text-gray-200'>Reviews</p>
                                        <p className='text-gray-400'>All Reviews about This Service - {ServiceDetails.service_name}</p>
                                    </div>
                                    <button onClick={() => setLoading(true)} className="justify-center text-white bg-neutral-800 border-2 hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 mt-4 md:mt-0">
                                        <div className='flex items-center justify-center'>
                                            <MdRateReview className="mr-2 h-6 w-6" />
                                            <span>Write Your Review</span>
                                        </div>
                                    </button>
                                </div>
                                <div className={!(serviceReviews.length <= 0) ? 'hidden' : 'block'}>
                                    <p className='text-2xl font-semibold text-gray-500 text-center mt-16 mb-16'>No Reviews Yet Added</p>
                                </div>
                                <div>
                                    <div className="text-center">
                                        <Spinner
                                            className={loading ? 'block' : 'hidden'}
                                            aria-label="Extra large spinner example"
                                            size="md"
                                        />
                                    </div>
                                    {serviceReviews.map(review => <ReviewsView key={review._id} review={review}></ReviewsView>)}
                                </div>
                            </div>
                        </div>
                        {/* <Link to={`/checkout/${ServiceDetails.service_id}`}>
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
                        </Link> */}
                    </Card>
                </div>
            </div>
        </PhotoProvider>
    );
};

export default ServiceDetails;