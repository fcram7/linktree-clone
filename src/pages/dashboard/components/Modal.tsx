import { FormEvent, useState } from 'react';
import { MdClose } from "react-icons/md";
import Input from '../../../components/Input';
import useLinksStore from '../../../zustand/links';
import { addLinksData } from '../../../db/db';
import toast from 'react-hot-toast';

interface modal {
  onClick: () => void,
}

interface options {
  value: string,
  option: string
}

const Modal = ({ onClick }: modal) => {
  const { title, url, icon, setTitle, setUrl, setIcon } = useLinksStore();
  const [formError, setFormError] = useState("");

  const options: options[] = [
    {
      value: "FaCircle",
      option: "No Icon (Default as Circle)"
    },
    {
      value: "FaInstagram",
      option: "Instagram"
    },
    {
      value: "FaGithub",
      option: "Github"
    },
    {
      value: "FaLinkedIn",
      option: "LinkedIn"
    },
    {
      value: "FaYoutube",
      option: "Youtube"
    },
    {
      value: "FaShoppingBag",
      option: "Shop,"
    },
    {
      value: "FaLocationDot",
      option: "Location",
    }
  ]

  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();

    if (!title || !url) {
      setFormError("Please fill the form correctly");
    }

    console.log(title);
    console.log(url);
    console.log(icon);

    try {
      await addLinksData({ title, url, icon });
      window.location.reload();
      return toast.success(`Successfully added ${title} link`);
    } catch (error) {
      console.error(error);
      return toast.error(`Oops! there's an error ${error}`);
    }
  }

  return ( 
    <>
      <div id="addLinkModal" className={`modal fixed block top-[20%] left-0 right-0 w-[86%] h-[65%] mx-[7%] bg-neutral-100 border 
        border-neutral-700 rounded-3xl md:w-[60%] md:left-[13%] lg:w-[50%] lg:left-[18%]`}
      >
        <button onClick={onClick} className="close-button absolute right-5 top-4 text-2xl">
          <MdClose />
        </button>
        <div className="px-8 pt-4 w-100">
          <h1 className="text-center text-2xl mb-6">Add Your Link</h1>
          <form onSubmit={onSubmitHandler} action="" className="flex flex-col gap-3">
            <label htmlFor="">Title</label>
            <Input placeholder="Title" onChange={(e) => setTitle(e.currentTarget.value)} value={title} type="text"/>
            <label htmlFor="">URL</label>
            <Input placeholder="URL" onChange={(e) => setUrl(e.currentTarget.value)} value={url} type="text"/>
            <label htmlFor="">Icon</label>
            <select onChange={(e) => {
              console.log(e)
              setIcon(e.currentTarget.value)
            }} className="px-2 py-3 border rounded-lg border-neutral-700 focus:border-sky-600" name="" id="">
              {options.map((option, index) => (
                <option key={index} value={option.value}>{option.option}</option>
              ))}
            </select>

            <p className="text-red-600">{formError}</p>
            <button title="Submit New Link Button" className="bg-neutral-600 transition ease-in-out duration-300 hover:bg-neutral-500 w-[100%] py-2 px-4 mt-4 text-slate-100 rounded-lg">Add Link</button>
          </form>
        </div>
      </div>
    </>
   );
}
 
export default Modal;