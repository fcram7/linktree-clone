import { Link, useNavigate } from 'react-router-dom';

import useAuthStore from '../../zustand/auth';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { FormEvent } from 'react';
import { login } from '../../auth/auth';
import toast from 'react-hot-toast';

const LoginForm = () => {
  const navigate = useNavigate();

  const { email, password, setEmail, setPassword } = useAuthStore();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await login({
        email,
        password,
      });

      return toast.success("Login Successful");
    } catch (error) {
      console.error(error);
      return toast.error(`Oops! there's something wrong ${error}`);
    } finally {
      navigate("/dashboard")
    }
  }

  return ( 
    <section className="login-section py-32 px-[7%] h-full flex lg:justify-center">
      <div className="login-content h-full w-full flex flex-col items-center justify-center gap-4 lg:max-w-[50rem]">
        <form onSubmit={handleSubmit} className="form flex flex-col gap-4 w-[70%] border px-6 py-6 rounded-2xl border-neutral-400 shadow-2xl">
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