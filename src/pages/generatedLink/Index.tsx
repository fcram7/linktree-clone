import { Helmet } from 'react-helmet-async';
import Links from './Links';

const GeneratedLink = () => {
  return ( 
    <>
      <Helmet>
        <title>Fachri's links list | Personal Link App</title>
        <meta name="description" content="Personal Link App Fachri's Generated Link"/>
        <link rel="canonical" href="/links/:username" />
      </Helmet>
      <Links />
    </>
   );
}
 
export default GeneratedLink;