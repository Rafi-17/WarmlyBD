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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
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
        }
    ]
  },
]);