import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Home from '../pages/home/Index';
import Login from '../pages/login/Index';
import SignUp from '../pages/signup/Index';
import { supabase } from '../utils/supabase';
import Dashboard from '../pages/dashboard/Index';
import { User } from '@supabase/supabase-js';

const RouteHandler = () => {
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const session = await supabase.auth.getSession();
      if(session) {
        const { data: { user }} = await supabase.auth.getUser();
  
        setLoggedInUser(user);
      }
    }

    checkUserLoggedIn();
  }, [])

  return ( 
    <>
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        
        {loggedInUser ? (
          <Route path="/dashboard" element={<Dashboard />}/>
        ) : (
          <>
            <Route path="*" element={<Login />}/>
          </>
        )}
      </Routes>
    </>
  );
}

export default RouteHandler;