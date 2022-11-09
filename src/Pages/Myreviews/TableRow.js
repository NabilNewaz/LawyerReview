import { Button, Modal, Rating, Textarea, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { RiDeleteBin6Fill, RiEditBoxFill } from "react-icons/ri";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const TableRow = ({ review, setLoading }) => {
    const [toggleEditModal, setToggleEditModal] = useState(false);
    const [toggleDeleteModal, setToggleDeleteModal] = useState(false);
    const [ratingValue, setratingValue] = useState(0);

    const handleWriteReview = () => {
        setToggleEditModal(true);
        setratingValue(review.rating_value)
    }
    const EditModalClose = () => {
        setToggleEditModal(false);
        setratingValue(0);
    }

    const deleteModalClose = () => {
        setToggleDeleteModal(false);
    }

    const handleUpdateReview = event => {
        event.preventDefault();
        const form = event.target;
        const id = form.reviewid.value;
        const rating = form.rating.value;
        const reviewMsg = form.reviewmsg.value;

        const newReview = {
            rating_value: rating,
            review_message: reviewMsg,
            review_date: new Date().getTime()
        }

        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset();
                    setToggleEditModal(false);
                    setLoading(true);
                    toast.success("Review Updated Successfully");
                }
            })
            .catch(er => {
                toast.error("Review Not Updated");
            });

    }

    const handleDelete = id => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    setToggleDeleteModal(false);
                    setLoading(true);
                    toast.success("Review Deleted Successfully");
                }
            })
            .catch(er => {
                toast.error("Review Not Deleted");
            });
    }

    const handleDeleteBtn = () => {
        setToggleDeleteModal(true);
    }

    return (
        <tr className="border-b bg-opacity-0 border-gray-700">
            <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap text-white">
                <Link to={`/service/${review.service_id}`}>{review.service_name}</Link>
            </th>
            <td className="py-4 px-6">
                {new Date(parseInt(review.review_date)).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </td>
            <td className="py-4 px-6">
                <Rating>
                    <Rating.Star filled={review.rating_value < 1 ? false : true} />
                    <Rating.Star filled={review.rating_value < 2 ? false : true} />
                    <Rating.Star filled={review.rating_value < 3 ? false : true} />
                    <Rating.Star filled={review.rating_value < 4 ? false : true} />
                    <Rating.Star filled={review.rating_value < 5 ? false : true} />
                </Rating>
            </td>
            <td className="py-4 px-6">
                {review.review_message}
            </td>
            <td className="py-4 px-6">
                {review.help_count}
            </td>
            <td className="py-4 px-6">
                {review.abuse_count}
            </td>
            <td className="py-4 px-6 flex">
                <button onClick={() => handleWriteReview()} className="font-medium flex items-center text-gray-200 border-2 px-4 py-2 rounded-lg dark:text-blue-500 hover:text-black hover:bg-white mr-2 mb-2 md:mb-0"><RiEditBoxFill></RiEditBoxFill><span className='ml-1'>Edit</span></button>
                <button onClick={() => handleDeleteBtn()} className="font-medium flex items-center text-gray-200 border-2 px-4 py-2 rounded-lg dark:text-blue-500 hover:bg-red-700"><RiDeleteBin6Fill></RiDeleteBin6Fill><span className='ml-1'>Delete</span></button>
            </td>
            <React.Fragment>
                <Modal
                    show={(toggleEditModal) ? true : false}
                    size="md"
                    popup={true}
                    onClose={EditModalClose}
                >
                    <Modal.Header className='bg-neutral-800 border-2 border-b-0 rounded-t-lg' />
                    <Modal.Body className='bg-neutral-800 border-2 border-t-0 rounded-b-lg'>
                        <form onSubmit={handleUpdateReview}>
                            <div className="space-y-6 px-0 pb-4 sm:pb-6 lg:px-5 xl:pb-8">
                                <h3 className="flex flex-col font-medium text-gray-400 dark:text-white">
                                    <span>Edit A Review Of</span>
                                    <span className='font-bold text-xl text-gray-100'>{review.service_name}</span>
                                </h3>
                                <div>
                                    <div className="mb-2 block text-sm text-gray-200 font-semibold">
                                        <span>Give a New Rating</span>
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
                                        <span>Your New Review</span>
                                    </div>
                                    <Textarea
                                        id="reviewmsg"
                                        name="reviewmsg"
                                        defaultValue={review.review_message}
                                        required={true}
                                        rows={4}
                                    />
                                </div>
                                <div>
                                    <TextInput
                                        className='hidden'
                                        id="reviewid"
                                        name="reviewid"
                                        value={review._id}
                                        hidden
                                    />
                                </div>
                                <div className="w-full">
                                    <Button type="submit">
                                        Submit New Review
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
            <React.Fragment>
                <Modal
                    show={(toggleDeleteModal) ? true : false}
                    size="md"
                    popup={true}
                    onClose={deleteModalClose}
                >
                    <Modal.Header className='bg-neutral-800 border-2 border-b-0 rounded-t-lg' />
                    <Modal.Body className='bg-neutral-800 border-2 border-t-0 rounded-b-lg' >
                        <div className="text-center">
                            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-200 dark:text-gray-200" />
                            <h3 className="mb-5 text-lg font-normal text-gray-300 dark:text-gray-400">
                                Are you sure you want to delete this review?
                            </h3>
                            <div className="flex justify-center gap-4">
                                <Button
                                    color="failure"
                                    onClick={() => handleDelete(review._id)}
                                >
                                    Yes, I'm sure
                                </Button>
                                <Button
                                    color="gray"
                                    onClick={deleteModalClose}
                                >
                                    No, cancel
                                </Button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        </tr>
    );
};

export default TableRow;