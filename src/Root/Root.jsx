import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import CardDetails from "../components/Card/CardDetails";
import DonateList from "../components/Donation/DonateList";
import Statistic from "../components/Statistic/Statistic";

const myCreatedRoute = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <div>tor page nai</div>,
      children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('../data.json')
            },
            {
                path: "/donatelist",
                element:<DonateList></DonateList>,
                loader: () => fetch('../data.json')
            },
            {
                path:`carddetails/:id`,
                element:<CardDetails></CardDetails>,
                loader: () => fetch('../data.json')
            },
            {
              path: '/statistic',
              element:<Statistic></Statistic>,
              loader: () => fetch('../data.json')
            }
      ]
    },
  ]);

export default myCreatedRoute;