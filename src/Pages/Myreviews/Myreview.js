import { Spinner } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/Authprovider/Authprovider';
import TaableView from './TaableView';

const Myreview = () => {
    const { user, logOut } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [reviewData, setReviewData] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/user-reviews/${user.uid}`;
        fetch(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                if (response.status === 401 || response.status === 403) {
                    logOut();
                    toast.error('Token Invalid! Login Again')
                }
                return response.json();
            })
            .then((actualData) => {
                setReviewData(actualData);
                setLoading(false);
            })
            .catch((err) => {
                toast.error(err.message);
            });
    }, [user.uid, loading, logOut]);
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