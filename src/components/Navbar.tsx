import { Link } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <header className="navbar-section">
      <nav className="navbar flex py-6 px-[7%] text-slate-100 bg-neutral-900 bg-opacity-80 fixed top-0 left-0 right-0 z-50 justify-between items-center">
        <Link to="/" className="navbar-logo text-l md:text-xl lg:text-2xl">Linktree <span>Clone</span></Link>
        <div className="navbar-nav flex gap-4">
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </nav>
    </header>
   );
}
 
export default Navbar;