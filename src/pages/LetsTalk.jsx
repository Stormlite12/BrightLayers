import Navbar from "../components/Navbar"
import rectangle from "../assets/rectangleLetsTalk.png"
import LetsTalkForm from "../components/LetsTalkForm"

function LetsTalk() {
  return (
    <div>
        <Navbar/>
        <div className="w-full mt-80 flex justify-center items-center">
            <div className="self-center w-[69%] h-[10.125rem] mb-32 text-[#313338] text-center font-[Public Sans] text-[3.4375rem] font-medium leading-[118%] tracking-[0.03438rem]">A call is worth 
                      <span className="text-[#F97316]"> 120 seconds </span>
                      of the fastest most definite call to action you can take ツ
            </div>
        </div>
        

    <div className="mx-auto w-[90%] flex flex-row justify-between">
      <div><img src={rectangle} alt="" /></div>
      <LetsTalkForm/>
    </div>
    
        
    </div>
  )
}

export default LetsTalk
