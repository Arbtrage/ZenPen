import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import "./index.css";
import ErrorPage from "./pages/errorPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/generate",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="mockup-window border m-10 h-auto bg-base-300">
      <div className="flex flex-col gap-5 justify-center bg-base-200">
        <Navbar />
        <RouterProvider router={router} />
        <Footer />
      </div>
    </div>
  </React.StrictMode>
);
