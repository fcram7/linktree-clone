// import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useEffect, useState } from 'react';

import LinkCard from '../../components/LinkCard';
import Icons from '../../components/Icons';

import getLinksData from '../../db/db';
import { FaFontAwesome } from 'react-icons/fa';

interface Link {
  icon: string,
  title: string,
  url: string
}

const Links = () => {
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState<Link[] | null>(null);

  useEffect(() => {
    const data = async () => {
      setLoading(true);

      try {
        const linksData = await getLinksData();
        setLinks(linksData);
        
      } catch (error) {
        console.error(error)
      }

      setLoading(false);
    }

    data();
  }, [])

  return ( 
    <section className="links-section py-32 px-[7%] h-full flex lg:justify-center">
      <div className="links-content h-full w-full flex flex-col justify-center gap-4 lg:max-w-[50rem]">
        {loading ? 
          <p>Loading...</p>
          : null
        }
        {links && links.map((link, index) => (
          <LinkCard key={index} linkIcon={<Icons iconName={link?.icon as keyof typeof FaFontAwesome} />} linkText={link?.title} linkUrl={link?.url}/>
        ))}
      </div>
    </section>
   );
}
 
export default Links;