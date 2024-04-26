import { create } from "zustand";

const useEfile = create((set) => ({
  efile: [
    {
      id: 1,
      name: "Workbook",
      date: new Date(2024, 3, 14),
      sale: 40,
      enrollment: 8,
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
      category: "Audiobook",
      content: {type: 'TEX', value:'Lorem Ipsum'},
    },
    {
      id: 2,
      name: "Back End Development",
      date: new Date(2024, 3, 22),
      sale: 5,
      enrollment: 1,
      isPublished: false,
      image: null,
      pricePlan: [],
      category: "eBook",
      content: "Times Magazine",
    },
  ],
  addEfile: () =>
    set((state) => ({
      efile: [
        ...state.efile,
        {
          id: state.efile.length + 1,
          name: null,
          date: new Date(),
          sale: null,
          enrollment: null,
          isPublished: false,
          image: null,
          pricePlan: [],
          category: null,
          content: "nothing"
        },
      ],
    })),
  deleteEfile: (id) =>
    set((state) => ({
      efile: state.efile.filter((efile) => efile.id !== id),
    })),
  setPublish: (id) =>
    set((state) => ({
      efile: state.efile.map((efile) =>
        efile.id === id ? { ...efile, isPublished: !efile.isPublished } : efile
      ),
    })),
  setCategory: (value, id) =>
    set((state) => ({
      efile: state.efile.map((efile) =>
        efile.id === id ? { ...efile, category: value } : efile
      ),
    })),
  setName: (value, id) =>
    set((state) => ({
      efile: state.efile.map((efile) =>
        efile.id === id ? { ...efile, name: value } : efile
      ),
    })),
}));

export default useEfile;
