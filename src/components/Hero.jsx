import './Hero.css';
import Typed from 'react-typed';

const Hero =() =>{
    return(
        <div className="Content">
            {/* absolute right-10 top-10 */}
            <div className=' flex flex-col justify-center mt-2 mx-4'>
                <span className='w-5 h-5 rounded-full bg-[#3f97f0]'/>
                <span className='Line'/>

            </div>
            <div className='text-white px-2 font-bold pt-5'>
                <div className='text-3xl md:text-5xl'> Myself 
                    <span className='p-2 text-[#3f97f0]'>Pratham Sinha</span>
                </div>
                <br/>
                <div className='text-2xl md:text-4xl my-3   '>Invested in: </div>
                <div>
                <Typed className='text-2xl md:text-4xl '
                    strings={[
                        'Front-End Web Development',
                        'Competitive Programming',
                        'Machine Learning',
                        'Deep Learning',
                        'Data Analysis']}
                    typeSpeed={50}
                    backSpeed={50}
                    loop
                />
                </div>
            </div>
        
        </div>
    )
    
}

export default Hero ;