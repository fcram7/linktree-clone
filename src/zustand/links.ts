import { create } from 'zustand';

interface links {
  title: string,
  url: string,
  icon: string,
  edit: boolean,
}

interface linksAction {
  setTitle: (title: links["title"]) => void,
  setUrl: (url: links["url"]) => void,
  setIcon: (icon: links["icon"]) => void,
  setEdit: (edit: links["edit"]) => void,
}

const useLinksStore = create<links & linksAction> ((set) => ({
  title: "",
  url: "",
  icon: "FaRegCircle",
  edit: false,
  setTitle: (title) => set(() => ({ title: title })),
  setUrl: (url) => set(() => ({ url: url })),
  setIcon: (icon) => set(() => ({ icon: icon })),
  setEdit: (edit) => set(() => ({ edit: edit }))
}));

export default useLinksStore;