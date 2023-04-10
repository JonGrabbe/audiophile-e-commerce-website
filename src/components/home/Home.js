// import "../../scss/main.scss";

import { Routes, Route } from "react-router-dom";
import Root from "../../routes/root";
import Main from "../main/Main";
import Content from "../header/content/Content";
import CategoriesPage from "../categoriesPage/CategoriesPage";

export default function Home(props) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Root headerContent={<Content />} hasBGI={true} />}>
         <Route index element={<Main />} />
        </Route>
      </Routes>

      {/* <Routes>
        <Route path="/categories/headphones" element={<CategoriesPage />}>
            <Route index element={<} />
        </Route>
      </Routes> */}
    </>
  );
}
