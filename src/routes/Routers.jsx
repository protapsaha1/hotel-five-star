import { createBrowserRouter } from "react-router-dom";
import Main from "../router/Main";
import FoodLayout from "../router/FoodLayout";
import RoomLayout from "../router/RoomLayout";
import ReservationLayout from "../router/ReservationLayout";
import HomePage from "../components/HomePage/HomePage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            }
        ]
    },
    {
        path: 'rooms',
        element: <RoomLayout></RoomLayout>
    },

    {
        path: 'foods',
        element: <FoodLayout></FoodLayout>
    },
    {
        path: 'reservation',
        element: <ReservationLayout></ReservationLayout>
    }
]);


export default router;