import { Link, useNavigate } from 'react-router-dom';

import { supabase } from '../../utils/supabase';
import useAuthStore from '../../zustand/auth';

import Button from '../../components/Button';
import Input from '../../components/Input';

const LoginForm = () => {
  const navigate = useNavigate();

  const { email, password, setEmail, setPassword } = useAuthStore();

  supabase.auth.onAuthStateChange(async (e) => {
    if (e === "SIGNED_IN") {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  });

  return ( 
    <section className="login-section py-32 px-[7%] h-full flex lg:justify-center">
      <div className="login-content h-full w-full flex flex-col items-center justify-center gap-4 lg:max-w-[50rem]">
        <form className="form flex flex-col gap-4 w-[70%] border px-6 py-6 rounded-2xl border-neutral-800">
          <h1 className="text-3xl mb-4 text-center">Login</h1>
          <label htmlFor="email">Email</label>
          <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.currentTarget.value)}/>
          <label htmlFor="password">Password</label>
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.currentTarget.value)}/>

          <Button type="submit" text="Login"/>

          <span>
            Don't have an account? <Link className="inline-block underline text-sky-700 hover:text-sky-500 transition ease-in-out duration-300" to="/signup">Sign up here</Link>
          </span>
        </form>
      </div>
    </section>
   );
}
 
export default LoginForm;