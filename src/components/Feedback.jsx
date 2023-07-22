import './Feedback.css';
import Tilt from 'react-parallax-tilt';

function Feedback() {
  return (
    <div className='bg-[#000] text-blue'>
        <div className='font-bold text-4xl p-7'>
            Contact Me : 
        </div>

        <div className='flex flex-wrap  justify-center items-center gap-10 py-10'>
           <div className='mx-7 flex flex-col justify-center items-center bg-greyl opacity-40 p-7 rounded-xl'>
                <div className=' bg-[#000] h-96 w-80 flex justify-center rounded-2xl bg-opacity-50  outline-1' >
                    <form className='py-4'>
                        <input type="text" placeholder='Your Name' size={30} className='input-text my-5 py-1 bg-transparent text-white outline-none '/>
                        <br/>
                        <input type="email" placeholder='Your Email' size={30} className='input-text my-5 py-1 bg-transparent text-white opacity-100 outline-none  '/>
                        <br/>
                        <textarea placeholder='Your message' cols={30} rows={5} className='input-text my-5 py-1 bg-transparent text-white opacity-100 text-ellipsis outline-none'/>
                        {/* <input type="text" placeholder='Suggesions' className='input-text bg-transparent'/> */}
                        
                    </form>
                </div>
                <button className='bg-purple p-2 mt-2 rounded-full'>   
                    <span className='mx-3 text-white'>Submit</span>     
                </button>
           </div>


           <div className=''>
            {/* HELLO_CANVAS */}
            
           
           </div>

           

            
        </div>
    </div>
  );
}

export default Feedback;