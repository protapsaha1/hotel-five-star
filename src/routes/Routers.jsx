import { createBrowserRouter } from "react-router-dom";
import Main from "../router/Main";
import ReservationLayout from "../router/ReservationLayout";
import ReserveRoom from "../components/Pages/Reservation/ReserveRooms/ReserveRoom";
import ReserveFood from "../components/Pages/Reservation/ReserveFoods/ReserveFood";
import Login from "../components/UserAuthentication/Login/Login";
import HomePage from "../components/Pages/Home/HomePage/HomePage";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import Rooms from "../components/Pages/Rooms/Rooms/Rooms";
import Foods from "../components/Pages/Foods/Foods/Foods";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'rooms',
                element: <Rooms />
            },
            {
                path: 'foods',
                element: <Foods />,
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage />

    },
    {
        path: 'reservation',
        element: <ReservationLayout />,
        children: [
            {
                path: 'my-rooms',
                element: <ReserveRoom />
            },
            {
                path: 'my-foods',
                element: <ReserveFood />
            }
        ]
    }

]);


export default router;