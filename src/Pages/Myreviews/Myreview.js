import { Spinner } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/Authprovider/Authprovider';
import TaableView from './TaableView';

const Myreview = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [reviewData, setReviewData] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/user-reviews/${user.uid}`;
        fetch(url)
            .then((response) => response.json())
            .then((actualData) => {
                setReviewData(actualData);
                setLoading(false);
            })
            .catch((err) => {
                toast.error(err.message);
            });
    }, [user.uid, loading]);
    return (
        <div className='container mx-auto md:px-5 px-3 mb-9 md:mt-5'>
            <div className="text-center p-5">
                <Spinner
                    className={loading ? 'block' : 'hidden'}
                    aria-label="Extra large spinner example"
                    size="md"
                />
            </div>
            <TaableView reviewData={reviewData} setLoading={setLoading}></TaableView>
        </div>
    );
};

export default Myreview;