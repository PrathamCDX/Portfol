import "./Feedback.css";
import Lottie from "lottie-react";
import animationData from "./phone_animation.json";
import Tilt from "react-parallax-tilt";
import { useState } from "react";
import axios from "axios";

function Feedback() {
  const [isLoading, setIsLoading] = useState(false);
  const [reviewerDetails, setReviewerDetails] = useState({
    name: "",
    feedback: "",
  });

  const handleSubmit = async () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    // console.log(import.meta.env.VITE_API_URL);
    if (reviewerDetails.name === "") {
      alert("Please enter your name.");
      return;
    }

    if (reviewerDetails.feedback === "") {
      alert("Please enter your feedback.");
      return;
    }
    const response = await axios.post(apiUrl + "/feedback", {
      name: reviewerDetails.name,
      feedback: reviewerDetails.feedback,
    });

    setReviewerDetails({
      name: "",
      feedback: "",
    });
    setIsLoading(false);
    console.log(response.data);
    if (response.status === 200) {
      alert("Feedback submitted successfully!");
    } else {
      alert("Failed to submit feedback. Please try again.");
    }
  };

  // console.log("Loading") ;
  return (
    <div className="bg-[#000] text-blue">
      <div className="font-bold text-4xl pl-7 pt-7">Feedback :</div>

      <div className="flex flex-wrap relative justify-center items-center gap-10  cover">
        <div className="lottie-wrap ml-7 ">
          <Lottie animationData={animationData} />
        </div>

        <div className="relative"></div>
        <div className="m-7 absolute bg-[#333] md:bg-greyl px-7 p-7 rounded-2xl opacity-50 card-back backdrop-blur-sm"></div>

        <div className=" absolute  flex flex-col justify-items">
          <div className=" bg-[#000] h-96 w-80 flex justify-center rounded-2xl bg-opacity-50 backdrop-blur-sm outline-1">
            <form className="py-4">
              <input
                value={reviewerDetails.name}
                onChange={(e) => {
                  let value = e.target.value;
                  setReviewerDetails({ ...reviewerDetails, name: value });
                }}
                id="name"
                type="text"
                placeholder="Your Name"
                size={30}
                className="input-text my-5 py-1 ml-10 md:ml-1 bg-transparent text-white outline-none "
              />
              <br />

              <textarea
                value={reviewerDetails.feedback}
                onChange={(e) => {
                  let value = e.target.value;
                  setReviewerDetails({ ...reviewerDetails, feedback: value });
                }}
                id="feed"
                placeholder="Your message"
                cols={30}
                rows={5}
                className="input-text my-5 py-1 ml-10 md:ml-1 bg-transparent text-white  text-ellipsis outline-none"
              />
            </form>
          </div>
          <button
            id="button"
            onClick={() => {
              setIsLoading(true);
              handleSubmit();
            }}
            className={
              "text-white bg-purple hover:bg-[#29278d] duration-300 p-2 mt-3 rounded-full " +
              (isLoading ? "cursor-not-allowed" : "")
            }
          >
            {/* <span className='mx-3 text-white'>Submit</span>      */}
            {isLoading ? <div>Submitting...</div> : <div>Submit</div>}
          </button>
        </div>

        <div className=""></div>
      </div>
    </div>
  );
}

export default Feedback;
