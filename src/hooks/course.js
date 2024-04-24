import { create } from "zustand";

const useCourse = create((set) => ({
  course: [
    {
      id: 1,
      name: "Front End Development",
      date: Date(2024, 4, 18),
      sale: 63,
      enrollment: 9,
      isPublished: true,
      image: null,
      pricePlan: [
        { type: "OTP", price: 7, desc: "Lorem Ipsum" },
        { type: "INS", price: 2, nPay: 4, desc: "Lorem Ipsum Dolor Sit Amet" },
      ],
      curriculum: [
        {
          sectionTitle: "HTML",
          lessons: [
            { title: "Basic", content: null },
            { title: "Intermediate", content: null },
          ],
        },
        {
          sectionTitle: "CSS",
          lessons: [
            { title: "Basic", content: null },
            { title: "Intermediate", content: null },
            { title: "Advanced", content: null },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Back End Development",
      date: Date(2024, 4, 21),
      sale: 15,
      enrollment: 5,
      isPublished: false,
      image: null,
      curriculum: [
        {
          sectionTitle: "API",
          lessons: [
            { title: "Basic", content: null },
            { title: "Intermediate", content: null },
            { title: "Advanced", content: null },
          ],
        },
        {
          sectionTitle: "Python",
          lessons: [{ title: "Basic", content: null }],
        },
      ],
    },
  ],
  setName: (value, index) =>
    set((state) => ({
      courses: state.courses.map((course, i) =>
        i === index ? { ...course, name: value } : course
      ),
    })),
  addCourse: () =>
    set((state) => ({
      course: [
        ...state.course,
        {
          id: course.length + 1,
          name: null,
          date: Date(2005, 5, 5),
          sale: null,
          enrollment: null,
          isPublished: false,
          image: null,
          pricePlan: [],
          curriculum: [],
        },
      ],
    })),
}));

export default useCourse;
