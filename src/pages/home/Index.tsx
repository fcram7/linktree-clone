import GenerateLink from './GenerateLink';
import Hero from './Hero';
import Types from './Types';

import { Helmet } from 'react-helmet-async';

const Home = () => {
  return ( 
    <>
      <Helmet>
        <title>Home | Personal Link App</title>
        <meta name="description" content="Personal Link App Homepage"/>
        <link rel="canonical" href="/" />
      </Helmet>
      <Hero />
      <Types />
      <GenerateLink />
    </>
   );
}
 
export default Home;