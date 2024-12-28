

function LetsTalkForm() {
    
  return (
    <div className="w-[750px] h-[800px]">
        <div className="w-full flex flex-col sm:flex-row gap-6">
            <div className="grid md:grid-cols-2 md:gap-6 w-full">
                    <div className="relative z-0 w-full mb-12 group">
                        <input type="text" className="block pt-6    px-0 w-full text-3xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                    </div>
                    <div className="relative z-0 w-full mb-12 group">
                        <input type="text" className="block pt-6  px-0 w-full text-3xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                    </div>
            </div>
        </div>

  {/* <!-- Email --> */}
  <div className="mb-12 relative z-0 w-full">
  <input type="email" className="block pt-6 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
     placeholder=" " required/>
     <label className="peer-focus:font-medium absolute text-2xl text-[#545454] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-6" >Email Address</label>
  </div>




  {/* <!-- Phone Number --> */}
  <div className="mb-12 relative z-0 w-full">
  <input type="email" className="block pt-6 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
     placeholder=" " required/>
     <label className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-6" >Phone Number</label>
  </div>

  {/* <!-- Brand Website --> */}
  <div className="mb-12 relative z-0 w-full">
  <input type="email" className="block pt-6 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
     placeholder=" " required/>
     <label className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-6" >Brand Website</label>
  </div>



  {/* <!-- About Brand --> */}
 
  <div className="w-full max-w-2xl">
     
      <div className="relative">
        
      <div className="w-full h-12 border-b border-gray-900 mb-12" />
      <label className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-6">
        Tell Us About Your Brand
      </label>
        <div className="w-full h-12 border-b border-gray-900 mb-6" />
        <div className="w-full h-12 border-b border-gray-900 mb-6" />
        <textarea 
          className="absolute top-1 left-0 w-full h-full resize-none bg-transparent focus:outline-none p-2 leading-[3rem] text-2xl"
          placeholder=""
        />
        <textarea 
          className="absolute top-1 left-0 w-full h-full resize-none bg-transparent focus:outline-none p-2 leading-[3rem] text-2xl"
          placeholder=""
        />
      </div>
    </div>




  {/* <!-- Services Inquiry --> */}
  <div className="mb-6">
    <label className="block text-sm font-medium text-gray-700 mb-3">What Service Are You Inquiring About?</label>
    <div className="grid grid-cols-2 gap-4">
      <label className="flex items-center space-x-2">
        <input type="checkbox" className="form-checkbox text-blue-500" />
        <span className="text-gray-700">Social Media Marketing</span>
      </label>
      <label className="flex items-center space-x-2">
        <input type="checkbox" className="form-checkbox text-blue-500" />
        <span className="text-gray-700">Branding & Imagery</span>
      </label>
      <label className="flex items-center space-x-2">
        <input type="checkbox" className="form-checkbox text-blue-500" />
        <span className="text-gray-700">Email Marketing</span>
      </label>
      <label className="flex items-center space-x-2">
        <input type="checkbox" className="form-checkbox text-blue-500" />
        <span className="text-gray-700">Social Media Adverts</span>
      </label>
      <label className="flex items-center space-x-2 col-span-2">
        <input type="checkbox" className="form-checkbox text-blue-500" />
        <span className="text-gray-700">Strategy Development</span>
      </label>
    </div>
  </div>

  {/* <!-- Submit Button --> */}
  <div className="text-center">
    <button
      type="submit"
      className="px-6 py-2 bg-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-400"
    >
      Submit
    </button>
  </div>
    </div>
  )
}

export default LetsTalkForm
 