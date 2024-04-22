import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Students from "../pages/Students/Students";
import CreateCourse from "../pages/CreateCourse/CreateCourse";
import CreateStep1 from '../pages/CreateCourse/CreateStep1'
import CreateStep2 from '../pages/CreateCourse/CreateStep2'
import CreateStep3 from '../pages/CreateCourse/CreateStep3'
import CreateStep4 from '../pages/CreateCourse/CreateStep4'
import CreateEfile from "../pages/CreateEfile/CreateEfile";

function MainRouter() {
  const allRouter = [
    { path: "/", element: <Home /> },
    { path: "/students", element: <Students /> },
    { path: "/create/course", element: <CreateCourse /> },
    { path: "/create/course/step-1", element: <CreateStep1/>},
    { path: "/create/course/step-2", element: <CreateStep2/>},
    { path: "/create/course/step-3", element: <CreateStep3/>},
    { path: "/create/course/step-4", element: <CreateStep4/>},
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
