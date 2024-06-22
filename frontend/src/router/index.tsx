import Home from "../pages/shared/home";
import Login from "../pages/auth/login";
import Event from "../pages/member/event";
import Logout from "../pages/auth/logout";
import Events from "../pages/member/events";
import Global from "../pages/shared/global";
import Register from "../pages/auth/register";
import Activate from "../pages/auth/activate";
import Statistics from "../pages/member/statistics";
import CreateEvent from "../pages/member/create-event";
import ResetPassword from "../pages/auth/reset-password";
import Authenticated from "../pages/shared/authenticated";
import ForgotPassword from "../pages/auth/forgot-password";
import { routes } from "../constants/route-constants";
import {
    Route,
    Routes,
    BrowserRouter
} from "react-router-dom";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.global} element={<Global />}>
                    <Route path={routes.home} element={<Home />} />
                    <Route path={routes.register} element={<Register />} />
                    <Route path={routes.activate} element={<Activate />} />
                    <Route path={routes.login} element={<Login />} />
                    <Route path={routes.logout} element={<Logout />} />
                    <Route path={routes.forgotPassword} element={<ForgotPassword />} />
                    <Route path={routes.resetPassword} element={<ResetPassword />} />
                    <Route path={routes.authenticated} element={<Authenticated />}>
                        <Route path={routes.event} element={<Event />} />
                        <Route path={routes.events} element={<Events />} />
                        <Route path={routes.createEvent} element={<CreateEvent />} />
                        <Route path={routes.statistics} element={<Statistics />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;