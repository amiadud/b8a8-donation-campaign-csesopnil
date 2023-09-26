import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import CardDetails from "../components/Card/CardDetails";
import DonateList from "../components/Donation/DonateList";
import Statistic from "../components/Statistic/Statistic";
import ErrorPage from "../pages/Home/ErrorPage/ErrorPage";

const myCreatedRoute = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('./data.json')
            },
            {
                path: "/donatelist",
                element:<DonateList></DonateList>,
                errorElement: <ErrorPage></ErrorPage>,
                loader: () => fetch('./data.json')
            },
            {
                path:`carddetails/:id`,
                element:<CardDetails></CardDetails>,
                loader: () => fetch('./data.json')
            },
            {
              path: '/statistic',
              element:<Statistic></Statistic>,
              errorElement: <ErrorPage></ErrorPage>,
              loader: () => fetch('./data.json')
            }
      ]
    },
  ]);

export default myCreatedRoute;