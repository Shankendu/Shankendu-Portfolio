/* eslint-disable react/prop-types */


const PagePreload = (props) => {
  return (
    <>
       <div id={`${props.id}`} className={`w-full h-screen flex items-center justify-center font-poppins font-black dark:bg-[#1a1a1a] dark:text-[#eaeaea] bg-[#F0F0F0] text-[#333333] border-b-2 dark:border-[#A3A3A3] border-[#F0F0F0] text-5xl ${props.className}`}>
      <div className="container h-[2.25rem] md:h-[3.75rem] lg:h-[6rem] w-fit relative overflow-hidden">
            <div
                className="flex flex-col justify-center items-center z-50 relative ">
                <span className="text-4xl md:text-6xl lg:text-8xl font-bold">{props.name}</span>
            </div>
        </div>
      </div>
    </>
  )
}

export default PagePreload
