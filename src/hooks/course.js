import { create } from "zustand";

const useCourse = create((set) => ({
  course: [
    {
      id: 1,
      name: "Front End Development",
      date: new Date(2024, 3, 18),
      sale: 63,
      enrollment: 9,
      isPublished: true,
      image: null,
      pricePlan: [
        { type: "OTP", currency: "IDR", price: 110000, desc: "Lorem Ipsum" },
        {
          type: "INS",
          currency: "IDR",
          price: 30000,
          nPay: 4,
          desc: "Lorem Ipsum Dolor Sit Amet",
        },
        {
          type: "SUB",
          currency: "IDR",
          price: 20000,
          freq: "bulan",
          desc: "Lorem Ipsum Dolor Sit",
        },
        { type: "FRE", currency: "IDR", desc: "Lorem Ipsum Dolor Sit Amet" },
      ],
      curriculum: [
        {
          sectionTitle: "HTML",
          lesson: [
            { title: "Basic", content: "Video" },
            { title: "Intermediate", content: "Hands on practice" },
          ],
        },
        {
          sectionTitle: "CSS",
          lesson: [
            { title: "Basic", content: "Video" },
            { title: "Intermediate", content: "Documentation" },
            { title: "Advanced", content: "Quiz" },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Back End Development",
      date: new Date(2024, 3, 21),
      sale: 15,
      enrollment: 5,
      isPublished: false,
      image: null,
      pricePlan: [],
      curriculum: [
        {
          sectionTitle: "API",
          lesson: [
            { title: "Basic", content: null },
            { title: "Intermediate", content: null },
            { title: "Advanced", content: null },
          ],
        },
        {
          sectionTitle: "Python",
          lesson: [{ title: "Basic", content: null }],
        },
      ],
    },
  ],
  addCourse: () =>
    set((state) => ({
      course: [
        ...state.course,
        {
          id: state.course.length + 1,
          name: null,
          date: new Date(),
          sale: null,
          enrollment: null,
          isPublished: false,
          image: null,
          pricePlan: [],
          curriculum: [],
        },
      ],
    })),
  deleteCourse: (id) =>
    set((state) => ({
      course: state.course.filter((course) => course.id !== id),
    })),
  setPublish: (id) =>
    set((state) => ({
      course: state.course.map((course) =>
        course.id  === id ? { ...course, isPublished: !course.isPublished } : course
      ),
    })),
  setName: (value, id) =>
    set((state) => ({
      course: state.course.map((course) =>
        course.id === id ? { ...course, name: value } : course
      ),
    })),
}));

export default useCourse;
