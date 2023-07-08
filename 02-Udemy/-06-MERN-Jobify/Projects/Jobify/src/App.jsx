import Landing from "./pages/Landing.jsx";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Register from "./pages/Register.jsx";
import Error from "./pages/Error.jsx";
import {AddJob, AllJobs, Profile, SharedLayout, Stats} from "./pages/dashboard/index.jsx";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element:
            <ProtectedRoute>
                <SharedLayout/>
            </ProtectedRoute>
        ,
        children: [
            {
                index: true,
                element: <Stats/>
            },
            {
                path: 'all-jobs',
                element: <AllJobs/>
            },
            {
                path: 'add-job',
                element: <AddJob/>
            },
            {
                path: 'profile',
                element: <Profile/>
            },
            {
                path: '*',
                element: <Error/>
            }
        ]
    },
    {
        path: 'landing',
        element: <Landing/>
    },
    {
        path: 'register',
        element: <Register/>
    },
]);
function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App
