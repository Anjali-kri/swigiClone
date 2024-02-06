import React from "react";
import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import { Error } from "./components/Error";
import RestrauntMenu from "./components/RestrauntMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const About = lazy(() => import("./components/About"));
const Applayout = () => {
  return (
    <div className="Header">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestrauntMenu />
      }
    ],
    errorElement: <Error />,
  },  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
