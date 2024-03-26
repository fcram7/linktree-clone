import { MdClose } from "react-icons/md";
import Input from '../../../components/Input';

interface modal {
  onClick: () => void,
}

const Modal = ({ onClick }: modal) => {
  return ( 
    <>
      <div className="modal absolute top-[20%] left-[25%] w-[50%] h-[65%] bg-neutral-100 border border-neutral-700 rounded-3xl">
        <button onClick={onClick} className="close-button absolute right-5 top-4 text-2xl">
          <MdClose />
        </button>
        <div className="px-8 pt-4">
          <h1 className="text-center text-2xl mb-6">Add Your Link</h1>
          <form action="" className="flex flex-col gap-3">
            <label htmlFor="">Title</label>
            <Input placeholder="Title" type="text"/>
            <label htmlFor="">URL</label>
            <Input placeholder="URL" type="text"/>
            <label htmlFor="">Icon</label>
            <Input />
            
            <button className="bg-neutral-600 transition ease-in-out duration-300 hover:bg-neutral-500 w-[100%] py-2 px-4 mt-4 text-slate-100 rounded-lg">Add Link</button>
          </form>
        </div>
      </div>
    </>
   );
}
 
export default Modal;