import { useEffect, useState } from 'react';
import { FaFontAwesome } from 'react-icons/fa';
import LinkCard from '../../components/LinkCard';
import Icons from '../../components/Icons';
import { getGeneratedLinksData } from '../../db/db';
import { useParams } from 'react-router-dom';

interface Link {
  icon: string,
  title: string,
  url: string,
}

const Links = () => {
  const [links, setLinks] = useState<Link[] | null>(null);

  const { username } = useParams<{ username: string }>();
  useEffect(() => {
    const data = async () => {
      if (username === "fcr_am") {
        try {
          const { data: linksData, error } = await getGeneratedLinksData();
  
          if (error) {
            console.error(error)
          } else if (Array.isArray(linksData)) {
            setLinks(linksData);
          } else {
            console.error(`Unexpected data format ${linksData}`);
          }
          
        } catch (error) {
          console.error(error)
        }
      }
    }

    data();
  }, [username])
  return ( 
    <section className="links-section py-56 px-[7%] h-full flex lg:justify-center">
      <div className="links-content h-full w-full flex flex-col justify-center gap-4 lg:max-w-[50rem]">
        {links && links.map((link, index) => (
          <LinkCard key={index} linkIcon={<Icons iconName={link?.icon as keyof typeof FaFontAwesome} />} linkText={link?.title} linkUrl={link?.url}/>
        ))}
      </div>
    </section>
   );
}
 
export default Links;