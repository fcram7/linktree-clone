import { Helmet } from 'react-helmet-async';
import DashboardSection from './DashboardSection';

const Dashboard = () => {

  return ( 
    <>
      <Helmet>
        <title>Dashboard | Personal Link App</title>
        <meta name="description" content="Personal Link App Dashboard Page"/>
        <link rel="canonical" href="/dashboard" />
      </Helmet>
      <DashboardSection />
    </>
   );
}
 
export default Dashboard;