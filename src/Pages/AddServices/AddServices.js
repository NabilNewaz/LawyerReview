import { Rating, Textarea, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';

const AddServices = () => {
    const [ratingValue, setratingValue] = useState(0);

    const handleSubmitNewService = event => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.servicename.value;
        const serviceImg = form.serviceimageurl.value;
        const servicePrice = form.serviceprice.value;
        const serviceRating = form.servicerating.value;
        const serviceDescription = form.servicedescription.value;

        const serviceData = {
            service_name: serviceName,
            service_img: serviceImg,
            service_price: servicePrice,
            service_rating: serviceRating,
            service_description: serviceDescription,
        }
        console.log(serviceData)
        fetch('https://b6a11-service-review-server-side-nabil-newaz.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset();
                    toast.success("Service Added Successfully");
                }
            })
            .catch(er => {
                toast.error("Service Not Added");
            });
    }

    return (
        <div>
            <Helmet>
                <title>Add Services - Lawyer</title>
            </Helmet>
            <div className="flex justify-center mx-3">
                <div className="container md:w-1/3">
                    <form onSubmit={handleSubmitNewService} className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block text-sm text-gray-200 font-semibold">
                                <span>Service Name</span>
                            </div>
                            <TextInput
                                id="servicename"
                                name='servicename'
                                type="text"
                                placeholder="Enter Service Name"
                                required={true}
                                shadow={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block text-sm text-gray-200 font-semibold">
                                <span>Service Image URL</span>
                            </div>
                            <TextInput
                                id="serviceimageurl"
                                name='serviceimageurl'
                                type="text"
                                placeholder="Enter Service Image URL"
                                required={true}
                                shadow={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block text-sm text-gray-200 font-semibold">
                                <span>Service Price</span>
                            </div>
                            <TextInput
                                id="serviceprice"
                                name='serviceprice'
                                type="text"
                                placeholder="Enter Service Price"
                                required={true}
                                shadow={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block text-sm text-gray-200 font-semibold">
                                <span>Give a Rating</span>
                            </div>
                            <Rating required>
                                <div className='cursor-pointer' onClick={() => setratingValue(1)}><Rating.Star filled={ratingValue < 1 ? false : true} /></div>
                                <div className='cursor-pointer' onClick={() => setratingValue(2)}><Rating.Star filled={ratingValue < 2 ? false : true} /></div>
                                <div className='cursor-pointer' onClick={() => setratingValue(3)}><Rating.Star filled={ratingValue < 3 ? false : true} /></div>
                                <div className='cursor-pointer' onClick={() => setratingValue(4)}><Rating.Star filled={ratingValue < 4 ? false : true} /></div>
                                <div className='cursor-pointer' onClick={() => setratingValue(5)}><Rating.Star filled={ratingValue < 5 ? false : true} /></div>
                            </Rating>
                            <TextInput
                                className='hidden'
                                id="servicerating"
                                name="servicerating"
                                value={ratingValue}
                                required={true}
                                hidden
                            />
                        </div>
                        <div>
                            <div className="mb-2 block text-sm text-gray-200 font-semibold">
                                <span>Service Description</span>
                            </div>
                            <Textarea
                                id="servicedescription"
                                name="servicedescription"
                                placeholder="Leave a Service Description..."
                                required={true}
                                rows={4}
                            />
                        </div>

                        <button className='border-2 rounded-lg py-2 hover:bg-white text-white hover:text-black' type="submit">
                            Add New Service
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddServices;