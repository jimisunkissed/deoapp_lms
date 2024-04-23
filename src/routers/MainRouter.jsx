import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Students from "../pages/Students/Students";
import CreateCourse from "../pages/CreateCourse/CreateCourse";
import CreateStep1 from "../pages/CreateCourse/CreateStep1";
import CreateStep2 from "../pages/CreateCourse/CreateStep2";
import CreateStep3 from "../pages/CreateCourse/CreateStep3";
import CourseSetup from "../pages/CreateCourse/CourseSetup";
import CourseCurriculum from "../pages/CreateCourse/CourseCurriculum";
import CreateEfile from "../pages/CreateEfile/CreateEfile";

function MainRouter() {
  const allRouter = [
    { path: "/", element: <Home /> },
    { path: "/students", element: <Students /> },
    { path: "/courses", element: <CreateCourse /> },
    { path: "courses/create/step-1", element: <CreateStep1 /> },
    { path: "courses/create/step-2", element: <CreateStep2 /> },
    { path: "courses/create/step-3", element: <CreateStep3 /> },
    { path: "courses/setup", element: <CourseSetup /> },
    { path: "course/curriculum", element: <CourseCurriculum /> },
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
