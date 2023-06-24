import { createBrowserRouter } from "react-router-dom";
import Main from "../router/Main";
// import ReservationLayout from "../router/ReservationLayout";
// import ReserveRoom from "../components/Pages/Reservation/ReserveRoom/ReserveRoom";
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

    }
    // {
    //     path: 'rooms',
    //     element: <RoomLayout />,
    //     children: [
    //         {
    //             path: ':room',
    //             element: <RoomPage />
    //         }
    //     ]
    // },

    // {
    //     path: 'foods',
    //     element: <FoodLayout />,
    //     children: [
    //         {
    //             path: ':food',
    //             element: <FoodsPage />
    //         }
    //     ]
    // },
    // {
    //     path: 'reservation',
    //     element: <ReservationLayout />,
    //     children: [
    //         {
    //             path: ':roomId',
    //             element: <ReserveRoom />,
    //             loader: ({ params }) => fetch(`http://localhost:6001/rooms/${params.roomId}`)
    //         }
    //     ]
    // },

]);


export default router;