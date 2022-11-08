import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
// import Coursedetails from './Pages/Coursedetails/Coursedetails';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Notfound from './Pages/Notfound/Notfound';
import Signup from './Pages/Signup/Signup';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Blog from './Pages/Blog/Blog';
import Profile from './Pages/Profile/Profile';
// import ResetPassword from './Pages/ResetPassword/ResetPassword';
import Services from './Pages/Services/Services';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          // loader: () => fetch('https://b610-lerning-platform-server-side-nabil-newaz.vercel.app/courses'),
          element: <Home sideNav={false}></Home>
        },
        {
          path: "/home",
          // loader: () => fetch('https://b610-lerning-platform-server-side-nabil-newaz.vercel.app/courses'),
          element: <Home sideNav={false}></Home>
        },
        {
          path: "/services",
          // loader: () => fetch('https://b610-lerning-platform-server-side-nabil-newaz.vercel.app/courses'),
          element: <Services></Services>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/blog",
          element: <Blog></Blog>
        },
        {
          path: "/signup",
          element: <Signup></Signup>
        },
        {
          path: "/profile",
          element: <PrivateRoute><Profile></Profile></PrivateRoute>
        },
        // {
        //   path: "/resetpassword",
        //   element: <PrivateRoute><ResetPassword></ResetPassword></PrivateRoute>
        // },
        // {
        //   path: "/course/:id",
        //   loader: ({ params }) => fetch(`https://b610-lerning-platform-server-side-nabil-newaz.vercel.app/course/${params.id}`),
        //   element: <Coursedetails></Coursedetails>
        // },
        {
          path: "*",
          element: <Notfound></Notfound>
        }
      ]
    }
  ])
  return (
    <div className='scrollbar-hide bg-neutral-800'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
