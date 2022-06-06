import { lazy } from "react";

// Lazy load your page components
const Home = lazy(() => import("../pages/home/home"));
const Login = lazy(() => import("../pages/auth/login/login"));
const Signup =lazy(()=>import("../pages/auth/signup/signup"))


/*
 * Route path: URLs
 */
export const paths = {
  home: "/home",
  login: "/auth/login",
  singup:"/auth/singup",
};

/*
 * Routes: path & lazy loaded component
 */
export const routes: any[] = [
  {
    path: paths.home,
    component: Home,
  },
  {
    path: paths.login,
    component: Login,
  },
  {
    path: paths.singup,
    component:Signup,
  }
];
