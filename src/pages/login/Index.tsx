import { Helmet } from 'react-helmet-async';
import LoginForm from './LoginForm';

const Login = () => {
  return ( 
    <>
      <Helmet>
        <title>Login | Personal Link App</title>
        <meta name="description" content="Personal Link App Login Page"/>
        <link rel="canonical" href="/login" />
      </Helmet>
      <LoginForm />
    </>
   );
}
 
export default Login;