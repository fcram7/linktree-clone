import { ReactNode, MouseEvent } from 'react';

import { FaExternalLinkAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";

interface links {
  title: string,
  icon: ReactNode,
  url: string,
  onDelete: (e: MouseEvent<HTMLButtonElement>) => void,
}

const DashboardLinkCard = ({ icon, title, url, onDelete }: links) => {
  return ( 
    <>
      <article className="dashboard-link-card w-full px-5 py-4 border border-neutral-300 shadow-lg bg-slate-100 rounded-xl">
        <div className="dashboard-link-card-container flex items-center justify-between">
          <div className="dashboard-link-card-content grid grid-rows-2 grid-flow-col w-fit gap-x-6 gap-y-2 items-center">
            <div className="w-fit row-span-2 col-span-1 text-3xl text-neutral-500">{icon}</div>
            <p className="text-2xl">{title}</p>
            <a target="_blank" href={url} className="text-md flex items-center gap-1 text-sky-600 transition-all duration-300 hover:opacity-60">
              Visit Link
              <span className="inline"><FaExternalLinkAlt /></span>
            </a>
          </div>

          <div className="edit-delete-container text-2xl">
            <button type="button" className="mx-3 text-neutral-400 transition-all duration-300 hover:text-blue-600"><FaRegEdit /></button>
            <button type="button" onClick={onDelete} className="text-neutral-500 transition-all duration-300 hover:text-red-500"><FaDeleteLeft /></button>
          </div>
        </div>
      </article>
    </>
   );
}
 
export default DashboardLinkCard;