import './Footer.css' ;
import { BsInstagram, BsGithub , BsFacebook, BsLinkedin} from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const Footer = () =>{
    return (
        <div className='bg-[#111]  px-4 py-5 flex justify-between items-center text-white'>
            <div className='mx-2 relative inset-y-1/2'>
                
                <p className='px-4'>The Logo</p>
            </div>

            <div className='font-bold mx-4 flex flex-col justify-center items-center'>
                <p className=' text-xl pb-2 '>Contact</p>
                <p className='font-medium'>+91 1009876549</p>
                <p className='font-medium'>xyz@gmail.com</p>
            </div>

            <div className='px-4 flex flex-col justify-center items-center'>

                 
                <p className='font-bold'>Profiles</p>
                <div className='flex flex-wrap justify-center items-center pt-2'>
                    <a href='https://www.instagram.com/' className='p-1  opacity-70 hover:opacity-100'>
                    <BsInstagram/>
                    </a>

                    <a href='https://www.instagram.com/' className='p-1 opacity-70 hover:opacity-100'>
                    <BsGithub/>
                    </a>

                    <a href='https://www.instagram.com/' className='p-1 opacity-70 hover:opacity-100'>
                    <BsLinkedin/>
                    </a>

                    <a href='https://www.instagram.com/' className='p-1 opacity-70 hover:opacity-100'>
                    <SiLeetcode/>
                    </a>
                </div>
                
            </div>
            
        </div>
    )
}

export default Footer;