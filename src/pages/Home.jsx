
import home1 from '../assets/home1.png'
import ContactForm from './ContactForm.jsx'
import image from '../assets/image.png'
import DropDown from '../functions/DropDown.jsx'
import { AnimatedLogo } from '../functions/AnimatedLogo.jsx'
import rectangle from '../assets/rectangle.png'
import rectangleMobile from '../assets/rectangleMobile.png'
import TakeTheCall from './TakeTheCall.jsx'
import KnowAboutUs from './KnowAboutUs.jsx'
import image25 from '../assets/image25.png'
import image26 from '../assets/image26.png'
import image27 from '../assets/image27.png'
import InfiniteScroll from '../components/card/InfiniteScroll.jsx'
import Footer from '../components/Footer.jsx'
import FounderBio from '../components/FounderBio.jsx'
import BlogSpot from '../components/BlogSpot.jsx'
import Navbar from '../components/Navbar.jsx'
// import { useLocation } from 'react-router-dom';

function Home() {
  // const location = useLocation();

  // useEffect(() => {
  //   const href = location.hash.substring(1); // Get the hash without the '#'
  //   if (href) {
  //     const element = document.getElementById(href);
  //     if (element) {
  //       element.scrollIntoView({ behavior: 'smooth' });
  //     }
  //     // Clear the hash from the URL
  //     history.replaceState(null, '', window.location.pathname);
  //   } else {
  //     // Scroll to top if no hash is present
  //     window.scrollTo(0, 0);
  //   }
  // },[location]);
  return (
    <div className='w-auto h-auto bg-[#ecf0f1] overflow-hidden z-[-1] mt-[10%]'>
      <Navbar />
           <div className='max-w-[1280px] mx-auto'>
           <div className='w-auto flex items-center justify-center BrightLayers'>
              <div className='md:w-[63.28125rem] md:h-[22.125rem] text-center w-[23.375rem] h-[8.375rem] mb-[]'>
                  <span className='text-[#303338] md:text-[3.4375rem] text-[1.125rem] font-semibold md:font-medium font-pSans md:leading-[4.0563rem] leading-[1.845rem] md:tracking-[0.03438rem] tracking-[0.01125rem]'>
                      We are Bright Layers, a dynamic social media agency since 2019,
                      dedicated to elevating brands through creative content and strategic
                      digital marketing
                    </span>
                    <span className="text-[#303338] md:text-[3.4375rem] text-[1.125rem] font-semibold md:font-medium font-pSans md:leading-[4.0563rem] leading-[1.845rem] md:tracking-[0.03438rem] tracking-[0.01125rem]">
                        {" "}
                      </span>
                    <span className="text-[#303338] md:text-[3.4375rem] text-[1.125rem] font-semibold md:font-medium font-pSans md:leading-[4.0563rem] leading-[1.845rem] md:tracking-[0.03438rem] tracking-[0.01125rem]">
                          ツ
                      </span>
               </div>
            </div>
           </div>

            <div className='w-full   flex justify-end '>
            <div className="lg:w-[79rem] md:h-[13.875rem] h-[6.9375rem] md:mt-[10.37rem] md:mb-[7.81rem]  " id='about'>
                <img
                    src={home1}
                    className="w-full h-auto cover"
                    alt="assets"
                  />
              </div>
            </div>
        


            <div className="md:w-auto md:h-[20.25rem] flex flex-col  mx-auto w-80">
                  <div className='text-left'>
                    <div
                      className="md:w-[53.938rem] md:h-[1.188rem] text-[#da5428] 
                      md:text-[1.5625rem] text-[1rem] md:font-semibold font-normal font-pSans capitalize md:leading-[1.8438rem] leading-[1.18rem] md:tracking-[0.01563rem] mx-auto w-[14.0625rem] h-[1.1875rem]">
                      What Do We Do?
                      </div>
                      </div>
                      <div className="md:w-[53.9375rem] md:h-[22.75rem]
                      text-[#535353] md:text-[1.5625rem] 
                        md:font-medium font-title md:leading-[2.03494rem] 
                        md:tracking-[0.01563rem] md:text-left md:mt-4
                        mx-auto w-[21.6875rem] 
                        h-[13.8125rem] text-center
                        items-center text-[0.8125rem] font-normal
                        leading-[1.05819rem]">
                        In the last 5 years, the country has seen trendsetting marketing
                        campaigns — but what&apos;s missing is &quot;the beyonds&quot; of a
                        campaign. Does it end after a post, a hoarding, an ad? So we just want
                        likes & comments? Maybe an app download? No. That can&apos;t be all.
                        <br />
                        <br />
                        There&apos;s more to your brand than this — and we want to bring that
                        to the front too. Beyond just campaigns. Just like our name, we are
                        here to brighten up your social media presence with a layered approach
                        that works exclusively for you.
                      </div>

                <div className='flex justify-end'>
                    <a href='#examples' className="w-[9.4375rem] h-[1.8125rem] text-[#535353] text-xl font-semibold font-title underline leading-relaxed tracking-tight mb-4 min-[320px]:hidden">
                        check examples
                    </a>
                  </div>
                </div>
                <div className='md:w-full md:h-[13.875rem]  flex justify-start md:mt-40 w-[25.4375rem] h-[6.9375rem]'>
                    <img src={image} alt="assets"  className='md:w-[75rem] md:h-[13.875rem] object-cover '/>
                  </div>



                    <div className='w-auto h-[20.25rem] flex flex-col mt-36 px-4'>
                        <div className='w-[53.938rem] h-[1.188rem] text-[#da5428] 
                          text-[1.5625rem] font-semibold font-pSans
                          capitalize leading-[1.8438rem] tracking-tight mx-auto'>How Do We Do It?</div>
                            <div className='w-[53.9375rem] h-[22.75rem] text-[#535353] 
                                text-[1.5313rem] font-medium font-title leading-9 tracking-tight text-left mt-4 mx-auto'>Our approach is different - a boutique-style agency that prioritizes understanding our   clients as intimately as our own business. This approach has not only made us experts in our field but has allowed us to build genuine partnerships.</div>
                                <div className='flex justify-end'>
                                      <a href='#examples' className="w-[9.4375rem] h-[9.75rem] text-[#535353] text-xl font-semibold font-title underline leading-relaxed tracking-tight mb-4 min-[320px]:hidden" id='service'>
                                          check services
                                        </a>
                                </div>
                            </div>


                    <div className='md:hidden w-full h-[13.875rem] flex justify-end mt-36'>
                      <img src={rectangleMobile} alt="" className='w-full' />
                    </div>
                    <div className='md:block flex flex-col items-center justify-center'>
                    <div className='w-[15.996rem] h-[3.98444rem] md:text-left text-center text-[1.43756rem] font-semibold leading-[1.69631rem] tracking-[0.01438rem] md:w-[34.375rem] md:h-[8.5625rem] text-[#303338] md:text-[2.8125rem] md:font-semibold font-pSans md:leading-4 md:tracking-tight mt-20 md:mt-10 md:ml-[9.125rem]'>Service We Provide For Your Brand
                                <span className="text-[#303338] md:text-[4.125rem] md:font-medium font-pSans md:leading-[4.8675rem] md:tracking-wide">
                                    {" "}
                                  </span>
                                <span className="text-[#303338] md:text-[2.9375rem] md:font-bold font-pSans md:leading-[3.6138rem] md:tracking-wide">
                                    ツ
                                  </span>
                                    <AnimatedLogo />
                          </div>
                    </div>
                          
                              <div className='flex md:items-center md:justify-between'>
                                  <DropDown />
                                  <div className='hidden md:flex md:-my-24'>
                                      <img src={rectangle} alt="image" className='md:mr-[5rem]' />
                                    </div>
                                </div>




                                <div>
                                  <ContactForm />
                                </div>



                                  <div className='w-full flex justify-center'>  
                                    <div className="w-[71.1875rem] h-[19.5625rem] text-center text-[#535353] font-medium font-title leading-snug tracking-tight text-[1.5625rem]">
                    Our ideal customer personas are small to medium-sized business
                    owners, marketing managers, and ad moguls  looking to make their
                    brand be seen. They value the power of strategy with creativity, and
                    believe in results, rather than buzz. <br />
                    <br />
                    If you&apos;re that persona looking to navigate the digital
                    marketing scene and give your brand the visibility it deserves,
                    you&apos;re the one for us. Hope we&apos;re the one for you too.
              </div>
            </div>     
            <div className='flex flex-row justify-center'>
                <TakeTheCall/>
                <svg
                    xmlns="http://www.w3.org/2000/svg" width="3" height="129" viewBox="0 0 3 129" fill="none" className='ml-16'>
                  <path d="M1.5 0V129" stroke="black" strokeWidth="2" />
   </svg>
                <KnowAboutUs />
            </div>

            <div className="w-auto h-[1.3125rem] md:h-[2.2687rem] text-center text-[#303338] text-[1.125rem] md:text-[2.3125rem] font-semibold font-pSans leading-[1.3275rem] md:leading-[2.7287rem] tracking-[0.01125rem] md:tracking-tight mt-80">What People Are Saying</div>

            <div className='flex justify-center'>
                <div className='w-auto flex flex-row justify-between md:mt-[8.67rem] mt-[4.38rem] space-x-[1.78rem] md:space-x-48'>
                  <img src={image26} alt="eureka" className='w-[7.09238rem] h-[4.15763rem] md:w-[16rem] md:h-[9.25rem] -ml-4 md:ml-10'/>
                  <img src={image25} alt="thames" className='w-[8.03281rem] h-[2.16513rem] md:w-[16rem] md:h-[4.3125rem] mt-[1.5rem] md:mt-[2.5rem]'/>
                  <img src={image27} alt="talash" className='w-[5.46194rem] h-[4.40219rem] md:w-[16rem] md:h-[9.25rem]'/>
                </div>
              </div>
            <div>
              <InfiniteScroll/>
            </div>
            <div>
              <FounderBio/>
            </div>
            <div id='blog' className='md:mb-[25%]'>
                <BlogSpot />
            </div>
            <div>
              <Footer/>
            </div>
            
    </div>
  )
}

export default Home