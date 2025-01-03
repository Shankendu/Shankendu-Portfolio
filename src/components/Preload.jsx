/* eslint-disable react/prop-types */


const Preload = (props) => {
  return (
    <>
      <div id={`${props.id}`} className={`w-full h-screen flex items-center justify-center font-poppins font-black bg-[#1a1a1a] text-[#eaeaea] text-5xl border-b-2 border-[#A3A3A3] ${props.className}`}>
      <div className="container h-[2.25rem] md:h-[3.75rem] lg:h-[6rem] w-fit relative overflow-hidden">
            <div
                className="flex flex-col justify-center items-center z-50 relative ">
                <span className="text-4xl md:text-6xl lg:text-8xl font-bold animate-spin-words transition-all delay-150 duration-300">HELLO.</span>
                <span className="text-4xl md:text-6xl lg:text-8xl font-bold animate-spin-words transition-all delay-150 duration-300">NAMASTE.</span>
                <span className="text-4xl md:text-6xl lg:text-8xl font-bold animate-spin-words transition-all delay-150 duration-300">BONJOUR.</span>
                <span className="text-4xl md:text-6xl lg:text-8xl font-bold animate-spin-words transition-all delay-150 duration-300">CIAO.</span>
                <span className="text-4xl md:text-6xl lg:text-8xl font-bold animate-spin-words transition-all delay-150 duration-300">HOLA.</span>
            </div>
        </div>
      </div>
    </>
  )
}

export default Preload
