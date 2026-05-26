import { create } from "zustand";

interface Announcement {
  announcement: {
    isActivated: boolean | null;
    isOk: boolean | null;
    message: string | null;
  };

  setAnnouncement: (announcement: {
    isActivated: boolean | null;
    isOk: boolean | null;
    message: string | null;
  }) => void;
}

export const useAnnouncement = create<Announcement>((set) => ({
  announcement: {
    isActivated: null,
    isOk: null,
    message: null,
  },

  setAnnouncement: (announcement) => set({ announcement }),
}));
