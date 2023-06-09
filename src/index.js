import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import HeadphonesPage from "./routes/headphones/HeadphonesPage";
import Root from "../src/routes/root";
import Main from "./components/main/Main";
// import CategoriesPage from "./components/categoriesPage/CategoriesPage";
import CategoriesPage from "./components/categoriesPage/CategoriesPage";
import Content from "./components/header/content/Content";
import HeaderText from "./routes/components/header-text/HeaderText";

import productsData from "./data/headphones-products";
import Home from "./components/home/Home";

// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Root headerContent={<Content />} hasBGI={true} />,
//       errorElement: <ErrorPage />,
//       children: [
//         {
//             path: "/",
//             element: <Main />
//         },

//       ]
//     },
//     {
//       path: "categories/headphones/",
//       element: <Root headerContent={<HeaderText text="Headphones" />} />,
//       children: [
//         {
//           path: "/categories/headphones/",
//           element: <CategoriesPage productsData={productsData} ProductType="headphones" />
//         }
//       ]
//     },
//     {
//       path: "categories/speakers",
//       element: <Root headerContent={<HeaderText text="Speakers" />} />,
//       children: [
//         {
//           path: "/categories/speakers",
//           element: <CategoriesPage productsData={productsData} ProductType="speakers" />
//         }
//       ]
//     }
//   ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
