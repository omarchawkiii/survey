import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Surveys from "./Views/Surveys";
import Login from "./Views/Login";
import Signup from "./Views/Signup";
import GuestLayout from "./Components/GuestLayout";
import DefaultLayout from "./Components/DefaultLayout";
import Dashboard from "./Views/Dashboard";

const Router = createBrowserRouter([
  {
    path : '/',
    element : <DefaultLayout />,
    children:[
      {
        path : '/dashboard',
        element : <Navigate to="/" />
      },
      {
        path : '/surveys',
        element : <Surveys />
      },
      {
        path : '/',
        element : <Dashboard />
      }

    ]

  },
  {
    path : '/',
    element : <GuestLayout />,
    children:[
      {
        path : '/login',
        element : <Login />
      }
      ,
      {
        path : '/signup',
        element : <Signup />
      }
    ]
  } ,



])

export default Router ;
