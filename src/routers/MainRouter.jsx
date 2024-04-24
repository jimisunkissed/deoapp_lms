import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Students from "../pages/Students/Students";
import CreateCourse from "../pages/CreateCourse/CreateCourse";
import CreateCourseStep1 from "../pages/CreateCourse/CreateCourseStep1";
import CreateCourseStep2 from "../pages/CreateCourse/CreateCourseStep2";
import CreateCourseStep3 from "../pages/CreateCourse/CreateCourseStep3";
import CourseSetup from "../pages/CreateCourse/CourseSetup";
import CourseCurriculum from "../pages/CreateCourse/CourseCurriculum";
import CourseCurriculumContent from "../pages/CreateCourse/CourseCurriculumContent";
import CreateEfile from "../pages/CreateEfile/CreateEfile";
import CreateEfileStep1 from "../pages/CreateEfile/CreateEfileStep1";
import CreateEfileStep2 from "../pages/CreateEfile/CreateEfileStep2";
import CreateEfileStep3 from "../pages/CreateEfile/CreateEfileStep3";
import CreateEfileStep4 from "../pages/CreateEfile/CreateEfileStep4";
import EfileSetup from "../pages/CreateEfile/EfileSetup";

function MainRouter() {
  const allRouter = [
    { path: "/", element: <Home /> },
    { path: "/students", element: <Students /> },
    { path: "/courses", element: <CreateCourse /> },
    { path: "/courses/create/step-1", element: <CreateCourseStep1 /> },
    { path: "/courses/create/step-2", element: <CreateCourseStep2 /> },
    { path: "/courses/create/step-3", element: <CreateCourseStep3 /> },
    { path: "/courses/setup", element: <CourseSetup /> },
    { path: "/course/curriculum", element: <CourseCurriculum /> },
    {
      path: "/course/curriculum/content",
      element: <CourseCurriculumContent />,
    },
    { path: "/efiles", element: <CreateEfile /> },
    { path: "/efiles/create/step-1", element: <CreateEfileStep1 /> },
    { path: "/efiles/create/step-2", element: <CreateEfileStep2 /> },
    { path: "/efiles/create/step-3", element: <CreateEfileStep3 /> },
    { path: "/efiles/create/step-4", element: <CreateEfileStep4 /> },
    { path: "/efiles/setup", element: <EfileSetup /> },
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
