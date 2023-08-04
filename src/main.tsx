import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import {Navbar} from "./components/Navbar/Navbar";
import "./App.css";
import {Home} from "./routes/Home/Home";
import {About} from "./routes//AboutUs/About";
import Contact from "./routes//Contact/Contact";
import ErrorPage from "./routes/ErrorPage";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/footer";
import { Vagas } from "./routes/Vagas/Vagas";
import { Projects } from "./routes/Projects/projects";
import { PrEst } from "./routes/Projects/ProgramaDeEstagio/PrEst";
import { Esg } from "./routes/Projects/Esg/Esg";
import { Mais } from "./routes/Projects/Mais/mais";


const AppLayout = () => {
  return (
    <>
    <Header/>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "vagas",
        element: <Vagas />,
      },
      {
        path: "projects",
        element: <Projects />,
        children: [
          {
            path: "programa-estagio",
            element: <PrEst />,
          },
          {
            path: "eventos",
            element: <Esg />,
          },
          {
            path: "mais",
            element: <Mais />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
);


