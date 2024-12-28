import { useState } from "react";
import founderImg from "../assets/founderImg.png";
function FounderBio() {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseOver = () => {
    setIsVisible(true); // Make the text visible permanently
  };

  return (
    <div className="flex flex-col items-center justify-center py-20 bg-[#F8F8F8] px-4">
      <div className="mb-36 text-[#303338] text-4xl font-semibold font-['Public Sans'] leading-[43.20px] tracking-tight">
        Meet Our Founder
      </div>
      <div className="w-full flex flex-row justify-center items-stretch space-x-6">
        <div>
          <img src={founderImg} alt="" className="h-auto" />
        </div>
        <div className="flex flex-col justify-between pl-3">
              <div>
                    <p className="text-[#565656] text-5xl font-semibold font-['Public Sans'] leading-[47.52px] max-w-[16.125rem] max-h-[6.1875rem] shrink-0">
                      Pooja <br /> Bhadoriya
                    </p>
                    <p className="text-[#717171] text-lg font-normal font-['Lato']">Founder & Creative Director</p>
              </div>
                

                    <p className="text-[#546660] text-[27.39px] font-normal font-['Archivo'] leading-9 tracking-tight max-w-[16.6875rem] max-h-[9.9375rem] shrink-0">
                      &ldquo;Oh also, she&apos;s really excited to meet you, fellow
                      business-owner.&rdquo;
                    </p>
        </div>
        <div className="max-w-[45rem] h-[28.75rem] text-[#727171] text-[26px] font-normal font-['Lato'] leading-9 tracking-tight space-y-6">
          <p>
            Full time overthinker and part time Founder, Pooja launched The
            Bright Layers in 2019 as a tribute to her experience of working in
            social media - be it as a designer, writer, creative director, or
            just as a consultant to her uncle who really wanted his mithai
            business to go viral on Instagram.
          </p>
          <p>
            As a business owner herself, she understands the passion that fuels
            a brand. Her goal is to bring that passion to the forefront, and to
            make businesses feel more human.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FounderBio;
