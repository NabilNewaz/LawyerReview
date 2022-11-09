import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Notfound from './Pages/Notfound/Notfound';
import Signup from './Pages/Signup/Signup';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Blog from './Pages/Blog/Blog';
import Profile from './Pages/Profile/Profile';
// import ResetPassword from './Pages/ResetPassword/ResetPassword';
import ServicesView from './Pages/Shared/Services/ServicesView';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Myreview from './Pages/Myreviews/Myreview';

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
          element: <ServicesView></ServicesView>
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
        // {
        //   path: "/resetpassword",
        //   element: <PrivateRoute><ResetPassword></ResetPassword></PrivateRoute>
        // },
        {
          path: "/service/:id",
          loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`),
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
