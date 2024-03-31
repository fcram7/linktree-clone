import { useEffect, useState } from 'react';
import { FaFontAwesome } from 'react-icons/fa';
import { FaPlus } from "react-icons/fa6";

import DashboardCard from './components/DashboardCard';
import { deleteLinksData, getLinksData } from '../../db/db';
import Icons from '../../components/Icons';
import Modal from './components/Modal';
import DashboardLinkCard from './components/DashboardLinkCard';
import toast from 'react-hot-toast';

interface links {
  id: number,
  title: string,
  icon: string,
  url: string,
}

const DashboardSection = () => {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [links, setLinks] = useState<links[] | null>(null);

  useEffect(() => {
    setLoading(prevLoading => !prevLoading);
    const data = async () => {
      try {
        const { data: linksData, error } = await getLinksData();

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

  const modalClickHandler = () => {
    setModal((prevModal) => !prevModal);
    if(!modal) {
      document.body.style.backgroundColor = "rgb(1, 1, 1, 0.3)";
    } else {
      document.body.style.backgroundColor = "";
    }
  }

  // const closeModal = () => {
  //   modalClickHandler();
  // }

  const onDeleteHandler = async (id: number, title: string) => {
    try {
      await deleteLinksData(id);
      const { data: updatedLinksData, error } = await getLinksData();
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
      {modal ? <Modal onClick={modalClickHandler}/> : null}
    </section>
   );
}
 
export default DashboardSection;