import { Rating } from 'flowbite-react';
import React from 'react';

const TableRow = ({ review }) => {
    return (
        <tr className="border-b bg-opacity-0 border-gray-700">
            <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap text-white">
                {review.service_name}
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
            <td className="py-4 px-6">
                <button href="#" className="font-medium text-gray-200 border-2 px-4 py-2 rounded-lg dark:text-blue-500 hover:text-black hover:bg-white mr-2 mb-2 md:mb-0">Edit</button>
                <button href="#" className="font-medium text-gray-200 border-2 px-4 py-2 rounded-lg dark:text-blue-500 hover:bg-red-700">Delete</button>
            </td>
        </tr>
    );
};

export default TableRow;