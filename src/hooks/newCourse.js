import { create } from "zustand";

const newCourse = create((set) => ({
  course: {
    name: "",
    date: new Date(),
    sale: 0,
    enrollment: 0,
    isPublished: false,
    image: null,
    pricePlan: [],
    projectId: "djisamsoe",
    section: [],
  },
  setName: (value) =>
    set((state) => ({
      course: { ...state.course, name: value },
    })),
  setImage: (value) =>
    set((state) => ({
      course: { ...state.course, image: value },
    })),
  setPricePlan: (value) =>
    set((state) => ({
      course: {
        ...state.course,
        pricePlan: [...state.course.pricePlan, value],
      },
    })),
  reset: () =>
    set({
      course: {
        name: "",
        date: new Date(),
        sale: 0,
        enrollment: 0,
        isPublished: false,
        image: null,
        pricePlan: [],
        projectId: "djisamsoe",
        section: [],
      },
    }),
}));

export default newCourse;
