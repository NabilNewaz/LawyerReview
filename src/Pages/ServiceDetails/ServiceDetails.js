import { Button, Card, Modal, Rating, Spinner, Textarea, TextInput } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import ReviewsView from './ReviewsView';
import { MdRateReview } from "react-icons/md";
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/Authprovider/Authprovider';


const ServiceDetails = () => {
    const ServiceDetails = useLoaderData();
    const [serviceReviews, setServiceReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [toggleModal, setToggleMoldal] = useState(false);
    const [ratingValue, setratingValue] = useState(0);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const url = `http://localhost:5000/service-reviews/${ServiceDetails._id}`;
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

    const handleWriteReview = () => {
        if (!user) {
            toast.error("Please Login To Add a Review");
        }
        else {
            setToggleMoldal(true);
        }
    }
    const modalClose = () => {
        setToggleMoldal(false);
        setratingValue(0);
    }

    const handleSubmitReview = event => {
        event.preventDefault();
        const form = event.target;
        const rating = form.rating.value;
        const reviewMsg = form.reviewmsg.value;
        const username = form.username.value;
        const userphoto = form.userphoto.value;

        const review = {
            service_id: ServiceDetails._id,
            service_name: ServiceDetails.service_name,
            rating_value: rating,
            review_message: reviewMsg,
            review_date: new Date().getTime(),
            help_count: 0,
            abuse_count: 0,
            reviewer_info: {
                userID: user?.uid,
                userName: username,
                userEmail: user?.email,
                userPhoto: userphoto
            }
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset();
                    setToggleMoldal(false);
                    setLoading(true);
                    toast.success("Review Added Successfully");
                }
            })
            .catch(er => {
                toast.error("Review Not Added");
            });

    }

    return (
        <PhotoProvider>
            <div className='container mx-auto md:px-5 px-3 mb-5 mt-5'>
                <div className='w-full mr-5 mb-5 md:mb-0'>
                    <Card className='bg-opacity-0 border-2'>
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
                                    <button onClick={() => handleWriteReview()} className="justify-center text-white bg-neutral-800 border-2 hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 mt-4 md:mt-0">
                                        <div className='flex items-center justify-center'>
                                            <MdRateReview className="mr-2 h-6 w-6" />
                                            <span>Write Your Review</span>
                                        </div>
                                    </button>
                                </div>
                                <div>
                                    <div className="text-center">
                                        <Spinner
                                            className={loading ? 'block' : 'hidden'}
                                            aria-label="Extra large spinner example"
                                            size="md"
                                        />
                                    </div>
                                </div>
                                <div className={!(serviceReviews.length <= 0) ? 'hidden' : 'block'}>
                                    <p className='text-2xl font-semibold text-gray-500 text-center mt-12 mb-12'>No Reviews Yet Added</p>
                                </div>
                                {serviceReviews.map(review => <ReviewsView key={review._id} review={review}></ReviewsView>)}
                            </div>
                        </div>
                        <React.Fragment>
                            <Modal
                                show={(toggleModal) ? true : false}
                                size="md"
                                popup={true}
                                onClose={modalClose}
                            >
                                <Modal.Header className='bg-neutral-800 border-2 border-b-0 rounded-t-lg' />
                                <Modal.Body className='bg-neutral-800 border-2 border-t-0 rounded-b-lg'>
                                    <form onSubmit={handleSubmitReview}>
                                        <div className="space-y-6 px-0 pb-4 sm:pb-6 lg:px-5 xl:pb-8">
                                            <h3 className="text-xl font-medium text-gray-100 dark:text-white">
                                                Write A Review
                                            </h3>
                                            <div>
                                                <div className="mb-2 block text-sm text-gray-200 font-semibold">
                                                    <span>Your Name</span>
                                                </div>
                                                <TextInput
                                                    id="username"
                                                    name='username'
                                                    placeholder={user?.displayName ? user.displayName : 'Unnamed User'}
                                                    value={user?.displayName ? user.displayName : 'Unnamed User'}
                                                    required={true}
                                                    disabled
                                                />
                                            </div>
                                            <div>
                                                <div className="mb-2 block text-sm text-gray-200 font-semibold">
                                                    <span>Your email</span>
                                                </div>
                                                <TextInput
                                                    className='cursor-not-allowed'
                                                    id="email"
                                                    name='email'
                                                    placeholder={user?.email}
                                                    value={user?.email}
                                                    required={true}
                                                    disabled
                                                />
                                            </div>
                                            <div>
                                                <div className="mb-2 block text-sm text-gray-200 font-semibold">
                                                    <span>Give a Rating</span>
                                                </div>
                                                <Rating>
                                                    <div className='cursor-pointer' onClick={() => setratingValue(1)}><Rating.Star filled={ratingValue < 1 ? false : true} /></div>
                                                    <div className='cursor-pointer' onClick={() => setratingValue(2)}><Rating.Star filled={ratingValue < 2 ? false : true} /></div>
                                                    <div className='cursor-pointer' onClick={() => setratingValue(3)}><Rating.Star filled={ratingValue < 3 ? false : true} /></div>
                                                    <div className='cursor-pointer' onClick={() => setratingValue(4)}><Rating.Star filled={ratingValue < 4 ? false : true} /></div>
                                                    <div className='cursor-pointer' onClick={() => setratingValue(5)}><Rating.Star filled={ratingValue < 5 ? false : true} /></div>
                                                </Rating>
                                                <TextInput
                                                    className='hidden'
                                                    id="rating"
                                                    name="rating"
                                                    value={ratingValue}
                                                    hidden
                                                />
                                            </div>
                                            <div>
                                                <div className="mb-2 block text-sm text-gray-200 font-semibold">
                                                    <span>Your Review</span>
                                                </div>
                                                <Textarea
                                                    id="reviewmsg"
                                                    name="reviewmsg"
                                                    placeholder="Leave a review massage..."
                                                    required={true}
                                                    rows={4}
                                                />
                                            </div>
                                            <div>
                                                <TextInput
                                                    className='hidden'
                                                    id="userphoto"
                                                    name="userphoto"
                                                    value={user?.photoURL ? user?.photoURL : 'https://i.ibb.co/X2xMzwL/defultuser.png'}
                                                    hidden
                                                />
                                            </div>
                                            <div className="w-full">
                                                <Button type="submit">
                                                    Submit Review
                                                </Button>
                                            </div>
                                        </div>
                                    </form>
                                </Modal.Body>
                            </Modal>
                        </React.Fragment>
                    </Card>
                </div>
            </div>
        </PhotoProvider>
    );
};

export default ServiceDetails;