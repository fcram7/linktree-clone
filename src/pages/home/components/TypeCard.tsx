import { ReactElement, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface typeCard {
  title: string,
  list: ReactElement,
}

const TypeCard = ({ title, list }: typeCard) => {
  const [open, setOpen] = useState(false);

  const listCardClickHandler = () => {
    setOpen(prevOpen => !prevOpen);
  }
  return ( 
    <div onClick={listCardClickHandler} className="types-card cursor-pointer border border-slate-400 p-4 shadow-lg flex flex-col h-full">
      <div className="card-header flex justify-between items-center">
        <h3 className="font-mono text-3xl">{title}</h3>
        <div className="arrow text-2xl">
          {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>
      
      <ul className={`list mt-6 grid ms-12 gap-4 overflow-hidden transition-all ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <li className="overflow-hidden">
          {list}
        </li>
      </ul>
    </div>
   );
}
 
export default TypeCard;