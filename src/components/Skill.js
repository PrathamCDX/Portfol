import './Skill.css'

import VanillaTilt from 'vanilla-tilt';
import Tilt from 'react-parallax-tilt' ;

const Skill=() =>{
    return (
        <div className='skill'>
            {/* <div className='hidden md:absolute right-10 top-130 md:flex flex-col justify-center m-4 '>
                <span className='w-5 h-5 rounded-full bg-[#3f97f0]'/>
                <span className='skill-line'/>

            </div> */}
            <div className='text-[#3f97f0] text-4xl md:text-5xl font-bold' id='shead'>
                
                <div className='mx-3 py-2 w-15 h- 15 px-6 hover:cursor-pointer'> Things I Know :</div>
                
                
            </div>


            <div 
             className=' flex flex-row justify-center item-center '
            >
            
                <div className='flex flex-wrap justify-center p-4 '>
                {/* flex py-4 */}
                    
                    <Tilt
                    className="parallax-effect-glare-scale"
                    perspective={500}
                    scale={1.02}
                    gyroscope={true}>
                    <div className=' skil-card ' > 
                    <img src='logo192.png' className=' skill-img ' />
                    </div>
                    </Tilt>

                    <Tilt
                    className="parallax-effect-glare-scale"
                    perspective={500}
                    scale={1.02}
                    gyroscope={true}>
                    <div className=' skil-card ' > 
                    <img src='tailwind-css-icon.png' className='skill-img' />
                    {/* max-w-20 max-h-20 rounded-md */}
                    </div>
                    </Tilt>

                    <Tilt
                    className="parallax-effect-glare-scale"
                    perspective={500}
                    scale={1.02}
                    gyroscope={true}>
                    <div className=' skil-card' > 
                    <img src='python.png' className='skill-img' />
                    </div>
                    </Tilt>

                    <Tilt
                    className="parallax-effect-glare-scale"
                    perspective={500}
                    scale={1.02}
                    gyroscope={true}>
                    <div className=' skil-card' > 
                    <img src='js.png' className='skill-img' />
                    </div>
                    </Tilt>

                    <Tilt
                    className="parallax-effect-glare-scale"
                    perspective={500}
                    scale={1.02}
                    gyroscope={true}>
                    <div className='skil-card' > 
                    <img src='css-icon.png' className='skill-img' />
                    </div>
                    </Tilt>

                    <Tilt
                    className="parallax-effect-glare-scale"
                    perspective={500}
                    scale={1.02}
                    gyroscope={true}>
                    <div className='skil-card' > 
                    <img src='html-icon.png' className='skill-img' />
                    </div>
                    </Tilt>

                    <Tilt
                    className="parallax-effect-glare-scale"
                    perspective={500}
                    scale={1.0}
                    gyroscope={true}>
                    <div className='skil-card ' > 
                    <img src='cpp.png' className='skill-img' />
                    </div>
                    </Tilt>

                    <Tilt
                    className="parallax-effect-glare-scale"
                    perspective={500}
                    scale={1.02}
                    gyroscope={true}>
                    <div className=' skil-card' > 
                    <img src='postman.png' className='skill-img' />
                    </div>
                    </Tilt>

                </div> 
                
                
            </div> 
            <div className='h-3'></div>
            
            
        </div>

        
    )
}

export default Skill ;