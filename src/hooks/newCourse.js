import { create } from "zustand";

const newCourse = create((set) => ({
  course: {
    name: "",
    date: new Date(),
    sale: 0,
    enrollment: 0,
    isPublished: false,
    image: { choice: null, data: null },
    pricePlan: [],
    projectId: "djisamsoe",
    section: [],
  },
  setName: (value) =>
    set((state) => ({
      course: { ...state.course, name: value },
    })),
  setImageData: (value) =>
    set((state) => ({
      course: {
        ...state.course,
        image: { ...state.course.image, data: value },
      },
    })),
  setImageChoice: (value) =>
    set((state) => ({
      course: {
        ...state.course,
        image: { ...state.course.image, choice: value },
      },
    })),
  setPricePlan: (value) =>
    set((state) => ({
      course: {
        ...state.course,
        pricePlan: [value],
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
        image: { choice: null, data: null },
        pricePlan: [],
        projectId: "djisamsoe",
        section: [],
      },
    }),
}));

export default newCourse;
