import { TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/Authprovider/Authprovider';

const ResetPassword = () => {
    const { resetPassword, errorMsgToast } = useContext(AuthContext);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const password = form.password.value;
        const rePassword = form.repassword.value;

        if (password !== rePassword) {
            toast.error("Your Password Doesn't Match!")
        }
        else {
            resetPassword(password)
                .then(() => {
                    form.reset();
                    toast.success('Password Successfully Updated');
                })
                .catch(error => errorMsgToast(error));
        }
    }
    return (
        <div>
            <div className="flex justify-center mx-3 md:py-16 py-2">
                <div className="container md:w-1/3">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block text-sm text-gray-200 font-semibold">
                                <span>Your New Passwords</span>
                            </div>
                            <TextInput
                                id="password2"
                                name='password'
                                type="password"
                                placeholder="Enter New Password"
                                required={true}
                                shadow={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block text-sm text-gray-200 font-semibold">
                                <span>Repeat New password</span>
                            </div>
                            <TextInput
                                id="repeat-password"
                                type="password"
                                placeholder="Re-Enter New Password"
                                name='repassword'
                                required={false}
                                shadow={true}
                            />
                        </div>
                        <button className='border-2 rounded-lg py-2 hover:bg-white text-white hover:text-black' type="submit">
                            Change Password
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default ResetPassword;