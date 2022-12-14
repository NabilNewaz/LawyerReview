import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Notfound from './Pages/Notfound/Notfound';
import Signup from './Pages/Signup/Signup';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Blog from './Pages/Blog/Blog';
import Profile from './Pages/Profile/Profile';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Myreview from './Pages/Myreviews/Myreview';
import AddServices from './Pages/AddServices/AddServices';
import ResetPassword from './Pages/ResetPassword/ResetPassword';
import ServicesPage from './Pages/Shared/Services/ServicesPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home datasize={3}></Home>
        },
        {
          path: "/services",
          element: <ServicesPage></ServicesPage>
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
        {
          path: "/my-reviews",
          element: <PrivateRoute><Myreview></Myreview></PrivateRoute>
        },
        {
          path: "/add-services",
          element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
        },
        {
          path: "/resetpassword",
          element: <PrivateRoute><ResetPassword></ResetPassword></PrivateRoute>
        },
        {
          path: "/service/:id",
          loader: ({ params }) => fetch(`https://b6a11-service-review-server-side-nabil-newaz.vercel.app/service/${params.id}`),
          element: <ServiceDetails></ServiceDetails>
        },
        {
          path: "*",
          element: <Notfound></Notfound>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
