import './NavBar.css';
const NavBar = () =>{
    return (
        <nav className="Navi">
            <div className='text-white font-bold flex items-center'>
                <img src='logo192.png' className='nav-img'></img>
                <p className='px-4 items-center text-2xl hover:cursor-pointer ' id='Logo'>React.PS</p>
            </div>
            
            <div className='hidden md:flex align-center justify-center gap-4'>
                
                    <li>
                        <a href="#home" className='text-white font-semibold p-3 rounded-lg
                        hover:text-blue hover:bg-greyl transition duration-300 ease-in-out '> About</a>
                    </li>
                    <li>
                        <a href="#Contact" className='Link'>Skills</a>
                    </li>
                    <li>
                        <a href="#About"className='Link'>Projects</a>
                    </li>

                    <li>
                        <a href="#Contact" className='Link'>Feedback</a>
                    </li>
                    <li>
                        <a href="#Contact" className='Link'>Contact</a>
                    </li>
                
            </div>
        </nav>
    )
}

export default NavBar