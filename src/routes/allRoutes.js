import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import LoginIcon from "@material-ui/icons/ExitToApp";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import CreateChallenge from "../pages/CreateChallenge";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUpPage";
import { DeviceSignalCellularConnectedNoInternet0Bar } from "material-ui/svg-icons";
import SignIn from "../pages/SignIn";
/**
 * The Public Routes
 * These routes are being used for the drawer but one could create another array
 * called drawerRoutes and export the object for each route that should exist in
 * the drawer only.
 *
 * Each object needs a key (mandatory)
 * A Path
 * name of the path to be displayed if necessary
 * an Icon
 * and a component if necessary.
 */
export const publicRoutes = [
  {
    key: 0,
    path: "/",
    name: "Home",
    authReq: false,
    icon: HomeIcon,
    component: Home
  },
  {
    key: 1,
    path: "/logIn",
    name: "Login",
    authReq: false,
    icon: LoginIcon,
    component: LogIn
  },
  {
    key: 2,
    path: "/profile",
    name: "Profile",
    authReq: true,
    icon: InfoIcon,
    component: Profile
  },
  {
    key: 3,
    path: "/createChallenge",
    name: "Create Challenge",
    authReq: true,
    icon: InfoIcon,
    component: CreateChallenge
  },
  {
    key: 4,
    path: "/signUp",
    name: "Sign Up",
    authReq: false,
    icon: InfoIcon,
    component: SignUp
  }
];
