import { useEffect, useState } from 'react';
import { FaFontAwesome } from 'react-icons/fa';
import { FaPlus } from "react-icons/fa6";

import DashboardCard from './components/DashboardCard';
import { addLinksData, deleteLinksData, editLinksData, getLinksData } from '../../db/db';
import Icons from '../../components/Icons';
import Modal from './components/Modal';
import DashboardLinkCard from './components/DashboardLinkCard';
import toast from 'react-hot-toast';
import useLinksStore from '../../zustand/links';
import { supabase } from '../../utils/supabase';
import Button from '../../components/Button';

interface links {
  id: number,
  title: string,
  icon: string,
  url: string,
  user_id: string,
}

const DashboardSection = () => {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [formError, setFormError] = useState("");
  const [links, setLinks] = useState<links[] | null>(null);
  const [linkId, setLinkId] = useState<number | null>(null);

  const { title, url, icon, edit, setTitle, setUrl, setIcon, setEdit } = useLinksStore();

  useEffect(() => {
    setLoading(prevLoading => !prevLoading);
    const data = async () => {
      const userId = (await supabase.auth.getUser()).data.user!.id
      console.log(await supabase.auth.getSession())

      try {
        const { data: linksData, error } = await getLinksData(userId);

        if (error) {
          console.error(error);
        } else if (Array.isArray(linksData)) {
          setLinks(linksData);
        } else {
          console.error(`Unexpected data format ${linksData}`);
        }
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    }

    data();
  }, []);

  let linkToEdit = links ? links.find(link => link.id === linkId) : null;
  
  const modalClickHandler = () => {
    setModal((prevModal) => !prevModal);
    if(!modal) {
      document.body.style.backgroundColor = "rgb(1, 1, 1, 0.3)";
    } else {
      document.body.style.backgroundColor = "";
      setEdit(false);
      linkToEdit = null;
    }
  }


  // console.log(edit);

  const editDataHandler = async (id?: number) => {
    if (!title || !url) {
      setFormError("Please fill the form correctly");
    }

    const userId = (await supabase.auth.getSession()).data.session!.user.id;

    try {
      await editLinksData({ id, title, url, icon, user_id: userId });
      setEdit(false);
      const { data: updatedLinksData, error } = await getLinksData(userId);
      if (error) {
        console.error(error);
      } else if (Array.isArray(updatedLinksData)) {
        setLinks(updatedLinksData);
      } else {
        console.error(`Unexpected data type ${updatedLinksData}`)
      }
      return toast.success(`Successfully edited ${title} link`);
    } catch (error) {
      console.error(error);
      return toast.error(`Oops! there's an error ${error}`);
    }
  }

  const addDataHandler = async () => {

    if (!title || !url) {
      setFormError("Please fill the form correctly");
    }

    const userId = (await supabase.auth.getSession()).data.session!.user.id;

    try {
      await addLinksData({ title, url, icon, user_id: userId });
      const { data: updatedLinksData, error } = await getLinksData(userId);
      if (error) {
        console.error(error);
      } else if (Array.isArray(updatedLinksData)) {
        setLinks(updatedLinksData);
        setModal((prevModal) => !prevModal);
        document.body.style.backgroundColor = "";
      } else {
        console.error(`Unexpected data type ${updatedLinksData}`)
      }
      return toast.success(`Successfully added ${title} link`);
    } catch (error) {
      console.error(error);
      return toast.error(`Oops! there's an error ${error}`);
    }
  } 

  const onDeleteHandler = async (id: number, title: string) => {
    const userId = (await supabase.auth.getSession()).data.session!.user.id;

    try {
      await deleteLinksData(id);
      const { data: updatedLinksData, error } = await getLinksData(userId);
      if (error) {
        console.error(error);
      } else if (Array.isArray(updatedLinksData)) {
        setLinks(updatedLinksData);
      } else {
        console.error(`Unexpected data type ${updatedLinksData}`)
      }

      return toast.success(`Successfully deleted ${title}`);
    } catch (error) {
      console.error(error)
      return toast.error(`Oops! there's an error ${error}`);
    }
  }

  const onGenerateClickHandler = async () => {
    const username = (await supabase.auth.getUser()).data.user?.user_metadata.username;
    window.open(`/links/${username}`, "_blank");
  }

  const modalArea = document.querySelector("#addLinkModal");
  window.onclick = (e: Event) => {
    const target = e.target as Node;
    if (target === modalArea) {
      setModal((prevModal) => !prevModal);
    }
  }


  return ( 
    <section className="dashboard-section py-32 px-[7%] h-full">
      <div className="dashboard-section-content">
        <div className="dashboard-cards w-full lg:w-[25%] md:w-[50%]">
          <DashboardCard linksLength={links?.length} />
        </div>

        <div className="generate-links pt-8 w-40">
          <Button text="Generate Links" type="button" onClick={onGenerateClickHandler}/>
        </div>

        <div className="w-full flex flex-col items-center mt-16">
          <h1 className="text-2xl text-center font-semibold mb-8">Current Links</h1>


          <div className="links flex flex-col items-center gap-6 h-full w-full lg:max-w-[50rem]">
            {loading ? 
              <p className="text-center">Loading...</p>
              : null
            }
            {links && links.map((link) => (
              <DashboardLinkCard 
                key={link.id}
                onSelect={() => {
                  setEdit(true)
                  setLinkId(link.id)
                  modalClickHandler()
                }}
                onDelete={() => {
                  onDeleteHandler(link!.id, link!.title)}
                }
                url={link?.url}
                title={link?.title}
                icon={<Icons iconName={link?.icon as keyof typeof FaFontAwesome}/>}
              />
            ))}
          </div>
        </div>

        <button title="Add New Link Button" onClick={modalClickHandler} className="fixed bottom-8 right-16 p-4 bg-neutral-700 border rounded-full 
        text-2xl text-neutral-300 transition ease-in-out duration-300 hover:bg-neutral-100 
        hover:text-neutral-700 hover:border-neutral-600">
          <FaPlus />
        </button>
      </div>
      {modal ? 
      <Modal
        edit={edit}
        linkToEdit={linkToEdit}
        setTitle={(e) => setTitle(e.currentTarget.value)}
        setUrl={(e) => setUrl(e.currentTarget.value)}
        setIcon={(e) => setIcon(e.currentTarget.value)}
        formError={formError}
        onClick={modalClickHandler}
        onSubmitHandler={(e) => {
          e.preventDefault();
          edit && linkToEdit ? editDataHandler(linkToEdit?.id) : addDataHandler()
        }}
      /> : 
      null}
    </section>
  );
}

export default DashboardSection;