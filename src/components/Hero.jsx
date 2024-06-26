import GlobeCanvas from "./Globe";
import "./Hero.css";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="Content justify-center flex-col md:justify-between md:flex-row">
      {/* absolute right-10 top-10 */}
      <div className="flex">
        <div className=" flex flex-col justify-center mt-2 mx-4">
          <span className="w-5 h-5 rounded-full bg-[#3f97f0]" />
          <span className="Line" />
        </div>
        <div className="text-white px-2 font-bold pt-5">
          <div className="text-4xl sm:text-5xl">
            {" "}
            Myself
            <span className="p-2 text-[#3f97f0]">Pratham Sinha</span>
          </div>
          <br />
          <div className="text-2xl md:text-4xl my-3   ">Invested in: </div>
          <div>
            <Typed
              className="text-2xl md:text-4xl "
              strings={["Front-End ", "Competitive Programming", "Back-End"]}
              typeSpeed={50}
              backSpeed={50}
              loop
            />
          </div>
        </div>
      </div>

      <div>
        <div className="bg-transparent z-30 md:z-0 absolute h-[350px] w-[350px]"></div>

        <div className="can-prop p-10">
          <GlobeCanvas />
        </div>
      </div>
    </div>
  );
};

export default Hero;
