import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/Authprovider/Authprovider';

const Navmenu = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Successfully Sign Out');
            })
            .catch(error => {
                const onlyErrMsg = error.message.slice(22, error.message.length - 2);
                const processErrMsg = onlyErrMsg.split('-');
                for (let i = 0; i < processErrMsg.length; i++) {
                    processErrMsg[i] = processErrMsg[i].charAt(0).toUpperCase() + processErrMsg[i].slice(1);

                }
                const finalMsg = processErrMsg.join(" ");
                toast.error(finalMsg);
            });
    }

    return (
        <div className="container mx-auto">
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    // Define default options
                    className: 'bg-white dark:bg-zinc-700 dark:text-white',
                    duration: 5000,

                    // Default options for specific types
                    success: {
                        duration: 5000,
                        theme: {
                            primary: 'white',
                            secondary: 'black',
                        },
                    },
                }}
            />
            <Navbar className='bg-neutral-800 mt-1' fluid={true} rounded={true}>
                <NavLink to="/">
                    <Navbar.Brand>
                        <Avatar
                            alt="Default avatar with alt text"
                            img="https://image.similarpng.com/very-thumbnail/2021/06/Lawyer-and-Law-Firm-Logo-on-transparent-background-PNG.png"
                            rounded={true}
                        />
                        <span className="self-center ml-2 text-white whitespace-nowrap text-xl font-semibold dark:text-white">
                            LAWYER Review
                        </span>
                    </Navbar.Brand>
                </NavLink>
                <div className="flex md:order-2 mt-1 md:mt-0 items-center">
                    <div className='hidden md:flex'>
                        <div className={user?.uid ? 'hidden' : 'block'}>
                            <Button.Group>
                                <NavLink to="/login" className={({ isActive }) => isActive ? 'text-black font-bold bg-white rounded-lg mr-1' : 'hover:bg-white text-white hover:rounded-lg hover:text-black mr-1'}>
                                    <Button className='border' color="blue">
                                        <span>Login</span>
                                    </Button>
                                </NavLink>
                                <NavLink to="/signup" className={({ isActive }) => isActive ? 'text-black font-bold bg-white rounded-lg mr-2' : 'hover:bg-white text-white hover:rounded-lg hover:text-black mr-2'}>
                                    <Button className='border' color="blue">
                                        <span>Signup</span>
                                    </Button>
                                </NavLink>
                            </Button.Group>
                        </div>
                    </div>
                    <div>
                        <div className='flex'>
                            <div className='mr-2'>
                                <div className={user?.uid ? 'block' : 'hidden'}>
                                    <Dropdown
                                        arrowIcon={false}
                                        inline={true}
                                        label={<Avatar alt="User settings" img={user?.photoURL ? user?.photoURL : 'https://i.ibb.co/X2xMzwL/defultuser.png'} rounded={true} />} >
                                        <Dropdown.Header>
                                            <span className="block text-sm">
                                                {user?.displayName ? user.displayName : 'Unnamed User'}
                                            </span>
                                            <span className="block truncate text-sm font-medium">
                                                {user?.email}
                                            </span>
                                        </Dropdown.Header>
                                        <Link to="/profile">
                                            <Dropdown.Item>

                                                Profile Setting
                                            </Dropdown.Item>
                                        </Link>
                                        <Link to="/resetpassword">
                                            <Dropdown.Item>
                                                Reset Password
                                            </Dropdown.Item>
                                        </Link>
                                        <Dropdown.Divider />
                                        <Dropdown.Item>
                                            <button onClick={handleLogOut}>Sign Out</button>
                                        </Dropdown.Item>
                                    </Dropdown>
                                </div>
                            </div>
                            <Navbar.Toggle className='border' />
                        </div>
                    </div>
                </div>

                <div className={user?.uid ? 'hidden' : 'flex mt-3 md:hidden mx-auto'}>
                    <div className='mt-3'>
                        <Button.Group>
                            <NavLink to="/login" className={({ isActive }) => isActive ? 'text-black font-bold bg-white rounded-lg mr-1' : 'hover:bg-white text-white hover:rounded-lg hover:text-black mr-1'}>
                                <Button className='border' color="blue">
                                    <span className='dark:text-white'>Login</span>
                                </Button>
                            </NavLink>
                            <NavLink to="/signup" className={({ isActive }) => isActive ? 'text-black font-bold bg-white rounded-lg mr-2' : 'hover:bg-white text-white hover:rounded-lg hover:text-black mr-2'}>
                                <Button className='border' color="blue">
                                    <span className='dark:text-white'>Signup</span>

                                </Button>
                            </NavLink>
                        </Button.Group>
                    </div>
                </div>

                <Navbar.Collapse>
                    <Navbar.Link className='hover:bg-neutral-800'>
                        <NavLink className={({ isActive }) => isActive ? 'text-black font-bold bg-white px-3 md:py-2 py-1 rounded-lg mb-2' : 'hover:text-white text-gray-400 mb-2'} to="/home">
                            Home
                        </NavLink>
                    </Navbar.Link>
                    <Navbar.Link className='hover:bg-neutral-800'>
                        <NavLink className={({ isActive }) => isActive ? 'text-black font-bold bg-white px-3 md:py-2 py-1 rounded-lg mb-2' : 'hover:text-white text-gray-400 mb-2'} to="/courses" >
                            Services
                        </NavLink>
                    </Navbar.Link>
                    <Navbar.Link className='hover:bg-neutral-800'>
                        <NavLink className={({ isActive }) => isActive ? 'text-black font-bold bg-white px-3 md:py-2 py-1 rounded-lg mb-2' : 'hover:text-white text-gray-400 mb-2'} to="/blog" >
                            Blog
                        </NavLink>
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navmenu;