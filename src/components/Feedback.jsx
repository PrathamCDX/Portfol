import './Feedback.css';
import Lottie from "lottie-react" ;
import animationData from './phone_animation.json' ;
import Tilt from 'react-parallax-tilt';

function Feedback() {
  return (
    <div className='bg-[#000] text-blue'>
        
        
        <div className='font-bold text-4xl pl-7 pt-7'>
            Contact Me : 
        </div>

        <div className='flex flex-wrap relative justify-center items-center gap-10  cover'>
            {/* < className='flex justify-center items-center '> */}
                <div className='lottie-wrap ml-7 '>
                    <Lottie animationData={animationData}/>
                </div>
            
            


            <div className='relative'></div>
            <div className='m-7 absolute bg-[#333] md:bg-greyl px-7 p-7 rounded-2xl opacity-50 card-back backdrop-blur-sm'></div>

            <div className=' absolute  flex flex-col justify-items'>
                    <div className=' bg-[#000] h-96 w-80 flex justify-center rounded-2xl bg-opacity-50 backdrop-blur-sm outline-1' >
                        <form className='py-4'>
                            <input type="text" placeholder='Your Name' size={30} className='input-text my-5 py-1 ml-10 md:ml-1 bg-transparent text-white outline-none '/>
                            <br/>
                            <input type="email" placeholder='Your Email' size={30} className='input-text my-5 py-1 ml-10 md:ml-1 bg-transparent text-white  outline-none  '/>
                            <br/>
                            <textarea placeholder='Your message' cols={30} rows={5} className='input-text my-5 py-1 ml-10 md:ml-1 bg-transparent text-white  text-ellipsis outline-none'/>
                            
                        </form>
                    </div>
                    <button className='bg-purple p-2 mt-3 rounded-full'>   
                        <span className='mx-3 text-white'>Submit</span>     
                    </button>
            
            </div>

           <div className=''>
           </div>
        </div>
    </div>
  );
}

export default Feedback;