import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  let Links =[
    {name:"HOME",link:"/breedit"},
    {name:"FIND PET",link:"/findpet"},
    {name:"CHAT",link:"/chat"},
    {name:"PROFILE",link:"/profile"}
  
  ];
  let [open,setOpen]=useState(false);
return (
  <div className='shadow-md w-full fixed top-0 left-0 z-50'>
    <div className='md:flex items-center justify-between bg-[#f7ebdb] py-2 md:px-10 px-7'>
    <div className=' cursor-pointer flex items-center font-[Oswald] 
    text-[#c88572] text-3xl tracking-wider '>
      <span className='text-3xl text-[#c88572] mr-3 pt-2'>
      <ion-icon name="logo-ionic"></ion-icon>
      </span>
      BREEDIT
    </div>
    
    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
    <ion-icon name={open ? 'close':'menu'}></ion-icon>
    </div>

    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#f7ebdb] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
      {
        Links.map((link)=>(
          <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
            <a href={link.link} className=' hover:text-[#505f2f] tracking-wide text-[#c88572] text-2xl font-[Oswald] hover:underline underline-offset-8 decoration-1 duration-500'>{link.name}</a>
          </li>
        ))
      }
      <Link to='/register' >
      
      <button className="button py-2 px-6 md:ml-8">
      Log Out
      </button>
      </Link>
    </ul>
    </div>
  </div>
)
}

export default Nav;
