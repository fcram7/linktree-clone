import { useNavigate } from 'react-router-dom';
import { signOut } from '../../auth/auth';
import toast from 'react-hot-toast';

const Dashboard = () => {
  const navigate = useNavigate();
  const onLogoutHandler = async () => {
    try {
      await signOut();
      navigate("/");
      return toast.success("Logout Success")
    } catch(error) {
      console.error(error)
    }
  }
  return ( 
    <section className="login-section py-32 px-[7%] h-full flex lg:justify-center">
      <button onClick={onLogoutHandler} type="button">Log Out</button>
    </section>
   );
}
 
export default Dashboard;