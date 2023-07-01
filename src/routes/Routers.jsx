import { createBrowserRouter } from "react-router-dom";
import Main from "../router/Main";
import ReservationLayout from "../router/ReservationLayout";
import ReserveRoom from "../components/Pages/Reservation/ReserveRooms/ReserveRoom";
import ReserveFood from "../components/Pages/Reservation/ReserveFoods/ReserveFood";
import Login from "../components/UserAuthentication/Authentication/Login/Login";
import HomePage from "../components/Pages/Home/HomePage/HomePage";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import Rooms from "../components/Pages/Rooms/Rooms/Rooms";
import Foods from "../components/Pages/Foods/Foods/Foods";
import SignUp from "../components/UserAuthentication/Authentication/SignUp/SignUp";
import Profile from "../components/Pages/ProfileSettings/Profile/Profile";
import Bookmarked from "../components/Pages/ProfileSettings/Bookmarked/Bookmarked";
import Dashboard from "../router/Dashboard";
import BookedFoods from "../components/Pages/ProfileSettings/Dashboard/Customer/BookedFoods/BookedFoods";
import BookedRooms from "../components/Pages/ProfileSettings/Dashboard/Customer/BookedRooms/BookedRooms";
import CustomerHome from "../components/Pages/ProfileSettings/Dashboard/Customer/CustomerHome/CustomerHome";
import ModeratorHome from "../components/Pages/ProfileSettings/Dashboard/Moderators/MorderatorHome/ModeratorHome";
import AddRooms from "../components/Pages/ProfileSettings/Dashboard/Moderators/AddRooms/AddRooms";
import AddFoods from "../components/Pages/ProfileSettings/Dashboard/Moderators/AddFoods/AddFoods";
import AdminHome from "../components/Pages/ProfileSettings/Dashboard/Admin/AdminHome/AdminHome";
import AllCustomer from "../components/Pages/ProfileSettings/Dashboard/Admin/AllCustomer/AllCustomer";
import AllModerators from "../components/Pages/ProfileSettings/Dashboard/Admin/AllModerators/AllModerators";
import ManageUsers from "../components/Pages/ProfileSettings/Dashboard/Admin/ManageUsers/ManageUsers";

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
                path: 'sign-up',
                element: <SignUp />
            },
            {
                path: 'rooms',
                element: <Rooms />
            },
            {
                path: 'foods',
                element: <Foods />,
            },
            {
                path: 'profile',
                element: <Profile />,
            },
            {
                path: 'bookmark',
                element: <Bookmarked />
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
    },
    {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
            // Customer route
            {
                path: 'my-dash-home',
                element: <CustomerHome />
            },
            {
                path: 'booked-foods',
                element: <BookedFoods />
            },
            {
                path: 'booked-rooms',
                element: <BookedRooms />
            },
            
            
            
            
            // Moderators
            {
                path: 'moderator-dash-home',
                element: <ModeratorHome />
            },
            {
                path: 'add-foods',
                element: <AddFoods />
            },
            {
                path: 'add-rooms',
                element: <AddRooms />
            },
            
            
            
            
            // admin route
            {
                path: 'admin-dash-home',
                element: <AdminHome />
            },
            {
                path: 'all-customer',
                element: <AllCustomer />
            },
            {
                path: 'all-moderator',
                element: <AllModerators />
            },
            {
                path: 'manage-users',
                element: <ManageUsers />
            }
        ]
    }

]);


export default router;