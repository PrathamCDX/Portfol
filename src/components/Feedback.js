import './Feedback.css';
import Tilt from 'react-parallax-tilt';

function Feedback() {
  return (
    <div className='bg-[#000] text-blue'>
        <div className='font-bold text-4xl p-7'>
            Suggesions : 
        </div>

        <div className='flex flex-col justify-center items-center py-10'>
           

            <div className=' bg-white h-72 w-80 flex justify-center rounded-2xl bg-opacity-5 hover:bg-opacity-10 outline-1' >
                <form className='py-4'>
                    <input type="email" placeholder='Email' size={30} className='input-text my-5 py-1 bg-transparent text-white opacity-100 outline-none border-b-2 '/>
                    <br/>
                    <textarea placeholder='Suggesion' cols={30} rows={5} className='input-text my-5 py-1 bg-transparent text-white opacity-100 text-ellipsis outline-none'/>
                    {/* <input type="text" placeholder='Suggesions' className='input-text bg-transparent'/> */}
                    
                </form>
            </div>
            <button className='bg-purple p-2 mt-2 rounded-full'>   
                <span className='mx-3 text-white'>Submit</span>     
            </button>
        </div>
    </div>
  );
}

export default Feedback;