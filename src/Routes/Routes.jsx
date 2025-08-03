import {
  createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DonationCampaign from "../Pages/DonationCampaign/DonationCampaign/DonationCampaign";
import { path } from "motion/react-client";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HowtoHelp from "../Pages/HowtoHelp/HowtoHelp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path: "/login",
          element:<Login></Login>
        },
        {
          path: "/register",
          element:<Register></Register>
        },
        {
          path:"/donationCampaigns",
          element:<DonationCampaign></DonationCampaign>
        },
        {
          path: "/donation-details/:id",
          element:<PrivateRoute><DonationDetails></DonationDetails></PrivateRoute>,
          loader: ()=>fetch('/donationData.json'),
        },
        {
          path: "/dashboard",
          element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
        },
        {
          path: "/updateProfile",
          element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
        },
        {
          path:"/help",
          element: <HowtoHelp></HowtoHelp>
        }
    ]
  },
]);