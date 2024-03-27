import { create } from 'zustand';

interface links {
  title: string,
  url: string,
  icon: string,
}

interface linksAction {
  setTitle: (title: links["title"]) => void,
  setUrl: (url: links["url"]) => void,
  setIcon: (icon: links["icon"]) => void,
}

const useLinksStore = create<links & linksAction> ((set) => ({
  title: "",
  url: "",
  icon: "FaRegCircle",
  setTitle: (title) => set(() => ({ title: title })),
  setUrl: (url) => set(() => ({ url: url })),
  setIcon: (icon) => set(() => ({ icon: icon })),
}));

export default useLinksStore;