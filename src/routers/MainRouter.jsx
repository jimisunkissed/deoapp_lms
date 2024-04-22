import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Students from "../pages/Students/Students"
import CreateCourse from "../pages/CreateCourse/CreateCourse";
import CreateEfile from "../pages/CreateEfile/CreateEfile";

function MainRouter() {
  const allRouter = [
    { path: "/", element: <Home /> },
    {path: '/students', element: <Students />},
    { path: "/create/course", element: <CreateCourse /> },
    { path: "/create/efile", element: <CreateEfile /> },
  ];

  return (
    <Routes>
      {allRouter.map((item, index) => {
        return <Route key={index} path={item.path} element={item.element} />;
      })}
    </Routes>
  );
}

export default MainRouter;
