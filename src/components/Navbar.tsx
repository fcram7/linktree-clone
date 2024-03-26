import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User } from '@supabase/supabase-js';
import { supabase } from '../utils/supabase';
import Button from './Button';
import toast from 'react-hot-toast';
import { signOut } from '../auth/auth';

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((_e, session) => {
      setLoggedInUser(session?.user ?? null);
    });

    return  () => authListener.subscription.unsubscribe();
  }, []);

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
    <header className="navbar-section">
      <nav className="navbar flex py-6 px-[7%] text-slate-100 bg-neutral-900 bg-opacity-80 fixed top-0 left-0 right-0 z-50 justify-between items-center">
        <Link to="/" className="navbar-logo text-l md:text-xl lg:text-2xl">Linktree <span>Clone</span></Link>
        <div className="navbar-nav flex gap-4 items-center">
          {loggedInUser && loggedInUser.user_metadata ? 
            (
              <>
                <span>Welcome, {loggedInUser?.user_metadata.username}</span>
                <div className="logout-button">
                  <Button onClick={onLogoutHandler} type="button" text="Logout"/>
                </div>
              </>
            ) : 
            (
              <>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
              </>
            )
          }
        </div>
      </nav>
    </header>
   );
}
 
export default Navbar;