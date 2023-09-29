import "./Skill.css";

import VanillaTilt from "vanilla-tilt";
import Tilt from "react-parallax-tilt";

const Scard = ({ logo }) => {
  return (
    <Tilt
      tiltReverse={true}
      className="parallax-effect-glare-scale"
      perspective={500}
      scale={1.02}
      gyroscope={true}
    >
      <div className=" skil-card ">
        {/* <p className='text-white bg-white'>this is logo </p> */}
        <img src={logo} className=" skill-img " />
        {/* {console.log("logo") } */}
      </div>
    </Tilt>
  );
};

const Skill = () => {
  return (
    <div className="skill">
      {/* {console.log("hello") } */}
      {/* <div className='hidden md:absolute right-10 top-130 md:flex flex-col justify-center m-4 '>
                <span className='w-5 h-5 rounded-full bg-[#3f97f0]'/>
                <span className='skill-line'/>

            </div> */}

      <div className="text-[#3f97f0] text-4xl md:text-5xl font-bold" id="shead">
        <div className="mx-3 py-2 w-15 h- 15 px-6 hover:cursor-pointer">
          {" "}
          Things I Know :
        </div>
      </div>

      <div className=" flex flex-row justify-center item-center ">
        <div className="flex flex-wrap justify-center p-4 ">
          <Scard logo={"logo192.png"} />
          <Scard logo={"tailwind-css-icon.png"} />
          <Scard logo={"python.png"} />
          <Scard logo={"js.png"} />
          <Scard logo={"css-icon.png"} />
          <Scard logo={"html-icon.png"} />
          <Scard logo={"cpp.png"} />
        </div>
      </div>
      <div className="h-3"></div>
    </div>
  );
};

export default Skill;
