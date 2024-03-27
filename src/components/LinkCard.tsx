import { ReactNode } from 'react';

interface linkProps {
  linkIcon: ReactNode,
  linkText: string,
  linkUrl?: string
}

const LinkCard = ({ linkIcon, linkText, linkUrl }: linkProps) => {
  return ( 
    <>
      <article className="link-card-container w-full">
        <div className="link-card-content">
          <a target="_blank" href={linkUrl} className="link-card flex items-center justify-center px-4 gap-2 text-l border border-neutral-900 py-4 w-full md:text-xl lg:text-2xl">
            {linkIcon} <span className="text-center">{linkText}</span>
          </a>
        </div>
      </article>
    </>
   );
}
 
export default LinkCard;