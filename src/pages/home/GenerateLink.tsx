import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

const GenerateLink = () => {
  const navigate = useNavigate();

  const onGenerateHandler = () => {
    navigate("/links/fcr_am");
  }
  return ( 
    <section className="generate-link py-28 px-[7%] h-full w-full">
      <h1 className="section-title text-center text-3xl leading-relaxed sm:text-4xl sm:leading-relaxed">
        Kindly click the button below to have a look on my socials and current personal work!
      </h1>
      <div className="generate-link-content mt-12 flex justify-center">
        <div className="generate-link-button w-36">
          <Button type="button" onClick={onGenerateHandler} text="Generate Links"/>
        </div>
      </div>
    </section>
   );
}
 
export default GenerateLink;