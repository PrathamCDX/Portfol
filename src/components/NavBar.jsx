import './NavBar.css';
import { useState } from "react";
import {BsMenuButton, BsDoorClosed} from 'react-icons/bs' ;
import {AiOutlineMenu} from 'react-icons/ai' ;
// import {IoClose} from 'react-icons/io' ;
const NavBar = () =>{
    const [vis, setVis] = useState(true);
    // setVis(1) ;
    let content ;
    return (
        <nav className="Navi">
            <div className='text-white font-bold flex items-center'>
                <img src='logo192.png' className='nav-img'></img>
                <p className='px-4 items-center text-2xl hover:cursor-pointer ' id='Logo'>React.PS</p>
            </div>
            {
                vis ?
                <AiOutlineMenu onClick={()=> setVis(!vis)} className='md:hidden hover:cursor-pointer absolute right-5 text-white text-2xl '/>
                :
                <BsDoorClosed onClick={()=> setVis(!vis)} className='md:hidden hover:cursor-pointer absolute right-5 text-white text-2xl '/>
            }
            
            <div className={`md:hidden bg-[#141414] absolute right-12 duration-300 ease-in-out rounded-lg ${ vis ?'top-[-200%]' : 'top-[50%]'  } `}>
                    <li className=' text-white font-semibold p-1 px-5 rounded-lg
                        hover:text-blue hover:bg-greyl transition duration-300 ease-in-out'>
                        <a href="#home" className=' '> About</a>
                    </li>
                    <li className=' text-white font-semibold p-1 px-5 rounded-lg
                        hover:text-blue hover:bg-greyl transition duration-300 ease-in-out'>
                        <a href="#Contact" className= ''>Skills</a>
                    </li>
                    <li className=' text-white font-semibold p-1 px-5 rounded-lg
                        hover:text-blue hover:bg-greyl transition duration-300 ease-in-out'>
                        <a href="#About"className=''>Projects</a>
                    </li>
                    <li className=' text-white font-semibold p-1 px-5 rounded-lg
                        hover:text-blue hover:bg-greyl transition duration-300 ease-in-out'>
                        <a href="#Contact" className=''>Contact</a>
                    </li>
            </div>

            <div className='hidden md:flex align-center justify-center gap-4'>
                
                    <li>
                        <a href="#home" className=' text-white font-semibold p-3 rounded-lg
                        hover:text-blue hover:bg-greyl transition duration-300 ease-in-out '> About</a>
                    </li>
                    <li>
                        <a href="#Contact" className='Link'>Skills</a>
                    </li>
                    <li>
                        <a href="#About"className='Link'>Projects</a>
                    </li>

                    {/* <li>
                        <a href="#Contact" className='Link'>Feedback</a>
                    </li> */}
                    <li>
                        <a href="#Contact" className='Link'>Contact</a>
                    </li>
                
            </div>
        </nav>
    )
}

export default NavBar