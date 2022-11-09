import React from 'react';
import TableRow from './TableRow';

const TaableView = ({ reviewData }) => {
    console.log(reviewData)
    return (
        <div>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg border-2">
                <table className="w-full text-sm text-left text-gray-200">
                    <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Services Name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Review Date
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Rating
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Review Message
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Helpful Count
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Abuse Count
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviewData.map(review => <TableRow key={reviewData._id} review={review}></TableRow>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TaableView;