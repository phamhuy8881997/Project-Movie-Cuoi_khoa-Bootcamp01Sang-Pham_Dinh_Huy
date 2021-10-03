import Booking from "../core/main/page/booking/booking";
import Home from "../core/main/page/home/home";
import Login from "../core/main/page/login/login";
import MovieDetail from "../core/main/page/movie_detail/movie_detail";
import Profile from "../core/main/page/profile/profile";
//import { Redirect } from "react-router-dom";
//import Dashboard from "../core/admin/page/movie_dashboard/dashboard";
//import MovieAdmin from "../core/admin/page/movie_admin/movie_admin";
import NewsPage from "../core/main/page/news/newsPage";
import AddMovie from "../core/admin/components/addMovie/addMovie";
import AddTime from "../core/admin/components/addTime/addTime";
import DataUser from "../core/admin/components/dataUser/dataUser";
import AdminMain from "../core/admin/components/adminMain/adminMain";

export const MainRoute = [
  {
    path: "/",
    exact: true,
    main: ({ history, match }) => <Home history={history} match={match} />,
  },
  {
    path: "/movie-detail/:id",
    exact: true,
    main: ({ history, match }) => (
      <MovieDetail history={history} match={match} />
    ),
  },
  {
    path: "/login",
    exact: true,
    main: ({ history, match }) => <Login history={history} match={match} />,
  },
  {
    path: "/booking/:id",
    exact: true,
    main: ({ history, match }) => <Booking history={history} match={match} />,
  },
  {
    path: "/profile",
    exact: true,
    main: ({ history, match }) => <Profile history={history} match={match} />,
  },
  {
    path: "/news/:id",
    exact: true,
    main: () => <NewsPage />,
  },
];

export const AdminRoute = [
  {
    path: "/admin",
    exact: true,
    main: () => <AdminMain />,
  },
  {
    path: "/add-movie",
    exact: true,
    main: () => <AddMovie />,
  },
  {
    path: "/add-time",
    exact: true,
    main: () => <AddTime />,
  },
  {
    path: "/data-user",
    exact: true,
    main: () => <DataUser />,
  },
];
