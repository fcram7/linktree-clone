import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Home from '../pages/home/Index';
import Login from '../pages/login/Index';
import SignUp from '../pages/signup/Index';
import { supabase } from '../utils/supabase';
import Dashboard from '../pages/dashboard/Index';
import { User } from '@supabase/supabase-js';
import GeneratedLink from '../pages/generatedLink/Index';

const RouteHandler = () => {
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((_e, session) => {
      setLoggedInUser(session?.user ?? null)
    });

    return () => authListener.subscription.unsubscribe();
  }, [])

  return ( 
    <>
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route path="/links/:username" element={<GeneratedLink />}/>
        {loggedInUser ? (
          <Route path="/dashboard" element={<Dashboard />}/>
        ) : (
          <>
            <Route path="*" element={<Login />}/>
            <Route path="/signup" element={<SignUp />}/>
          </>
        )}
      </Routes>
    </>
  );
}

export default RouteHandler;