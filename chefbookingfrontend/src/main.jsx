import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/App.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Login from "./components/Login.jsx";
import Allchef from "./components/Allchef.jsx";
import Contact from "./components/Contact.jsx";
import Signup from "./components/Signup.jsx";
import Adddetail from "./components/Adddetail.jsx";
import Chef from "./components/chef.jsx";
import Profile from "./components/Profile.jsx";
import Yourbooking from "./components/yourbooking.jsx";
import EditProfile from "./components/EditProfile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about-us", element: <About /> },
      { path: "/login", element: <Login /> },
      { path: "/chefs/:type", element: <Allchef /> },
      { path: "/contact", element: <Contact /> },
      { path: "/sign-up", element: <Signup /> },
      { path: "/addDetail", element: <Adddetail /> },
      { path: "/chef/:chefid", element: <Chef /> },
      { path: "/profile", element: <Profile /> },
      { path: "/yourbooking", element: <Yourbooking /> },
      { path: "/editprofile", element: <EditProfile /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
