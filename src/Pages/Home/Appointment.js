import { Card, Textarea, TextInput } from 'flowbite-react';
import React from 'react';

const Appointment = () => {
    return (
        <div className='flex lg:flex-row flex-col-reverse items-center lg:justify-center container mx-auto mt-5'>
            <div className='lg:mr-10 mx-5 mt-5 lg:mt-0'>
                <img src="1.png" alt="" />
            </div>
            <div className="lg:w-2/5 w-full px-3 md:px-5 lg:my-auto">
                <Card className='bg-opacity-0'>
                    <form className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block text-sm text-gray-200 font-semibold">
                                <span>Your Name</span>
                            </div>
                            <TextInput
                                id="name"
                                type="name"
                                placeholder="Enter Your Name"
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block text-sm text-gray-200 font-semibold">
                                <span>Your Mail</span>
                            </div>
                            <TextInput
                                id="email1"
                                type="email"
                                placeholder="name@gmail.com"
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block text-sm text-gray-200 font-semibold">
                                <span>Your Phone Number</span>
                            </div>
                            <TextInput
                                id="phone"
                                type="phone"
                                placeholder="Enter Your Phone Number"
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block text-sm text-gray-200 font-semibold">
                                <span>Appointment Date</span>
                            </div>
                            <TextInput
                                id="date"
                                type="date"
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block text-sm text-gray-200 font-semibold">
                                <span>Message</span>
                            </div>
                            <Textarea
                                id="massage"
                                type="massage"
                                placeholder="Leave Your Message..."
                                required={true}
                                rows={5}
                            />
                        </div>
                        <button className='border-2 rounded-lg py-2 hover:bg-white font-semibold text-white hover:text-black' type="submit">
                            Submit
                        </button>
                    </form>
                </Card>
            </div>

        </div>
    );
};

export default Appointment;