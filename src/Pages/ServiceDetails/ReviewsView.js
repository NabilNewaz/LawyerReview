import { Dropdown, Rating } from 'flowbite-react';
import React from 'react';
import toast from 'react-hot-toast';

const ReviewsView = ({ review, setLoading }) => {
    const handleHelpful = () => {
        const newHelpful = {
            help_count: 1
        }

        fetch(`http://localhost:5000/reviews-help/${review._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newHelpful)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setLoading(true);
                    toast.success("Thank You");
                }
            })
            .catch(er => {
                toast.error("Data Not Updated");
            });

    }

    const handleAbuser = () => {
        const newAbuse = {
            abuse_count: 1
        }

        fetch(`http://localhost:5000/reviews-abuse/${review._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAbuse)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setLoading(true);
                    toast.success("We Can TakeCare It");
                }
            })
            .catch(er => {
                toast.error("Data Not Updated");
            });

    }
    return (
        <div className='mt-5'>
            <article>
                <div class="flex items-center mb-3 space-x-4">
                    <img class="w-10 h-10 rounded-full" src={review.reviewer_info.userPhoto} alt="" />
                    <div class="space-y-1 font-medium dark:text-white">
                        <p className='text-2xl text-gray-100'>{review.reviewer_info.userName} <span class="block text-sm text-gray-500 dark:text-gray-400">{review.reviewer_info.userEmail}</span></p>
                    </div>
                </div>
                <div class="flex items-center mb-1">
                    <Rating>
                        <Rating.Star filled={review.rating_value < 1 ? false : true} />
                        <Rating.Star filled={review.rating_value < 2 ? false : true} />
                        <Rating.Star filled={review.rating_value < 3 ? false : true} />
                        <Rating.Star filled={review.rating_value < 4 ? false : true} />
                        <Rating.Star filled={review.rating_value < 5 ? false : true} />
                    </Rating>
                </div>
                <footer class="mb-3 text-sm text-gray-400 dark:text-gray-400"><p>Reviewed on <time>{new Date(parseInt(review.review_date)).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</time></p></footer>
                <p class="font-light text-gray-200 dark:text-gray-400 mb-3">{review.review_message}</p>
                <aside>
                    <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">{review.help_count} people found this helpful</p>
                    <div class="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                        <button onClick={handleHelpful} class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</button>
                        <button onClick={handleAbuser} class="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Report abuse</button>
                    </div>
                </aside>
                <div className='mt-5'>
                    <Dropdown.Divider />
                </div>
            </article>
        </div>
    );
};

export default ReviewsView;