import { useState } from "react";
function FounderBio() {

  const [isVisible, setIsVisible] = useState(false);

  const handleMouseOver = () => {
    setIsVisible(true); // Make the text visible permanently
  };

  return (
    <div className="flex flex-col items-center justify-center py-20 bg-[#F8F8F8]">
        <div className="text-[#303338] text-4xl font-semibold font-['Public Sans'] leading-[43.20px] tracking-tight">Meet Our Founder</div>
        <div>
                <div><img src="" alt="" /></div>
        </div>
    </div>
  )
}

export default FounderBio
