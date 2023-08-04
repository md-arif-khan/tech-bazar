import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-[#2D4356]">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
      <li><Link href="/">Home</Link></li>
        <li>
          <a>Category</a>
          <ul className="p-2">
          <li><Link href="#">CPU / Processor</Link></li>
            <li><Link href="#">Motherboard</Link></li>
            <li><Link href="#">RAM</Link></li>
            <li><Link href="#">Power Supply Unit</Link></li>
            <li><Link href="#">Monitor</Link></li>
            <li><Link href="#">Others</Link></li>
          </ul>
        </li>
       
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Tech Bazar</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href="/">Home</Link></li>
      
      <li tabIndex={0}>
        <details>
          <summary>Category</summary>
          <ul className="p-2">
            <li><Link href="#">CPU / Processor</Link></li>
            <li><Link href="#">Motherboard</Link></li>
            <li><Link href="#">RAM</Link></li>
            <li><Link href="#">Power Supply Unit</Link></li>
            <li><Link href="#">Monitor</Link></li>
            <li><Link href="#">Others</Link></li>
            
            
          </ul>
        </details>
      </li>
      
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-primary">PC Builder</a>
  </div>
</div>
    );
};

export default Navbar;