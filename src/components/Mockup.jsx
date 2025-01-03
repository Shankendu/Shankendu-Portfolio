/* eslint-disable react/prop-types */
import desktop from "../assets/images/desktop.png";


const Mockup = ({video}) => {
  return (
    <div className="w-full min-h-screen items-center justify-center p-10 z-10 relative hidden md:flex">
      {/* <div className="w-[900px] h-[500px] p-2 bg-black rounded-md flex flex-col items-center justify-end">
        <div className="w-full h-full">
          <video src={video2} className="w-full h-full object-cover"></video>
        </div>
      </div> */}

      {/* Insert video2 on the desktop */}
      <div className="relative w-[80%] min-h-screen bg-contain bg-no-repeat overflow-hidden" style={{backgroundImage: `url(${desktop})`}}> 
        <div className=" w-[80%] top-[4px] right-0 overflow-hidden">
          <video className=" overflow-hidden object-cover" src={video} muted autoPlay loop></video>
        </div>
      </div>
    </div>
  );
};

export default Mockup;
