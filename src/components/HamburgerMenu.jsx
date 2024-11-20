/* eslint-disable react/prop-types */





const HamburgerMenu = (props) => {

 
  return (
    <>
     <div  id="ham" className={`bg-black w-full h-screen ${props.className} transition-all duration-1000 ease-in-out`}>
    <div onClick={props.onClick} className="text-white text-2xl">
      X
    </div>
     </div> 
    </>
  )
}

export default HamburgerMenu
