import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import HomeLayout from "../layouts/HomeLayout";
import OtpPage from "../components/OtpPage";
import PasswordPage from "../components/PasswordPage";
import All from "../pages/All";
import Songs from "../pages/Songs";
import Podcasts from "../pages/Podcasts";
import Home from "../components/Home";
import PublicRoute from "../components/PublicRoute";
import ProtectedRoute from "../components/ProtectedRoute";
import Playlist from "../components/Playlist";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "otp",
              element: <OtpPage />,
            },
            {
              path: "password",
              element: <PasswordPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/home",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <HomeLayout />,
          children: [
            {
              path: "",
              element: <Home />,
              children: [
                {
                  path: "",
                  element: <All />,
                },
                {
                  path: "songs",
                  element: <Songs />,
                },
                {
                  path: "podcasts",
                  element: <Podcasts />,
                },
              ],
            },
            {
              path: "collection",
              element: <Playlist />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
