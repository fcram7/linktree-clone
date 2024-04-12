import { useParams } from 'react-router-dom';

const Footer = () => {
  const { username } = useParams<{ username: string }>();
  return (
    <footer className={`footer ${username === "fcr_am" ? "absolute bottom-0" : ""} text-slate-100 bg-neutral-900 bg-opacity-80`}>
      <div className="footer-content h-20 flex justify-center items-center">
        <h4>Developed by Fachri Achmad Maulana</h4>
      </div>
    </footer>
   );
}
 
export default Footer;