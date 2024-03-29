import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {

  const [user, loading, error] = useAuthState(auth);

  const logOut = () => {
    signOut(auth);
  }

  const menuItems = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/appointment'>Appoinment</Link></li>
    <li><Link to='/Review'>Reviews</Link></li>
    <li><Link to='/Contact'>Contact </Link></li>
    <li><Link to='/About'>About </Link></li>
    <li>{user ? <button className="btn btn-ghost" onClick={logOut}>Log Out</button> : <Link to='/login'>Log In</Link>}</li>

  </>
  return (
    <div className="navbar bg-base-100" data-theme="doctortheme">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Doctor's Portal</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menuItems}
        </ul>
      </div>

    </div>
  );
};

export default Navbar;