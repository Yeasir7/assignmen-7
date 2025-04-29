import React from 'react';
import frameImage from '../../images/Frame.png';
import hero from '../../images/hero.png';

const Header = () => {
    return (
        <div className='container mx-auto mb-24'>
            {/* navbar */}

            <div>  
<div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>Recipes</a></li>
        <li><a>About</a></li>
        <li><a>Search</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Recipe Calories</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><a>Home</a></li>
    <li><a>Recipes</a></li>
    <li><a>About</a></li>
    <li><a>Search</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  <label className="input w-[260px] rounded-3xl">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" className="grow" placeholder="Search" />
</label>
<img className='bg-[#0BE58A] rounded-full ml-3' src={frameImage} alt="" srcset="" />
  </div>
</div>
            </div>


            {/* banner */}

            <div>
            <div
  className="hero md:h-[600px] rounded-3xl"
  style={{
    backgroundImage:
      `url(${hero})`,
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="md:w-[800px]">
      <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
      <p className="my-6">
      Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
      </p>
      <button className="btn bg-[#0BE58A] rounded-full text-black">Explore Now</button>
      <button className="btn btn-outline rounded-full ml-4">Our Feedback</button>
    </div>
  </div>
</div>
            </div>

        </div>
    );
};

export default Header;