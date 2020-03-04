import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import LoginIcon from '@material-ui/icons/ExitToApp';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import Home from '../pages/Home';
import CreateChallenge from '../pages/CreateChallenge'
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
        path: '/home',
        name: 'Home',
        icon: HomeIcon,
        component: Home,
    },
    {
        key: 1,
        path: '/login',
        name: 'Login',
        icon: LoginIcon,
        component: null
    },
    {
        key: 2,
        path: '/viewChallenge',
        name: 'View Challenge',
        icon: InfoIcon,
        component: null
    },
    {
        key: 3,
        path: '/createChallenge',
        name: 'Create Challenge',
        icon: InfoIcon,
        component: CreateChallenge,
    }
]