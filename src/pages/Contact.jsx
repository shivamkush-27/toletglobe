
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const onChange = () => {}
  // Disable page reload on form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="my-3">
      <div className="grid sm:grid-cols-2 items-center gap-x-40 gap-y-10 p-8 mx-auto max-w-7xl text-[#333] font-[sans-serif]">
        <div>
          <h1 className="lg:text-4xl text-xl font-semibold text-white lg:w-5/6">Contact Us, We're Ready to Help!</h1>
          <p className="text-lg text-white mt-3 lg:w-2/3">We strive to provide you with best experience and the best platform to find your choice.</p>
          <p className="text-lg text-white mt-3">Post us any queries and we'll get back to you.</p>
          <div className="mt-12">
            <ul className="mt-3">
              <li className="flex items-center">
                <div className="h-10 w-10 rounded-full flex shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-messages-square"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z" /><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" /></svg>
                </div>
                <p className="text-white text-sm ml-3">
                  <h4 className="block text-lg font-bold">Chat with us!!</h4>
                  <span>Our friendly team is here to help</span><br />
                  <a href="mailto:to_let@gmail.com" target="blank" className="text-[#007bff]">to_let@gmail.com</a>
                </p>
              </li>

            </ul>
          </div>
          <div className="mt-6">
            <ul className="flex mt-3 space-x-4">
              <li className="flex items-center">
                <div className="h-10 w-10 rounded-full flex shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /><path d="M14.05 2a9 9 0 0 1 8 7.94" /><path d="M14.05 6A5 5 0 0 1 18 10" /></svg>
                </div>
                <span className="text-white text-sm ml-3">
                  <h4 className="block text-lg font-bold">Call us...</h4>
                  <span>Mon - Fri 8 AM to 10 PM</span><br />
                  <a href="tel:+919876543210" target="blank" className="text-[#007bff]">+91 9876543210</a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <form action="" onSubmit={handleSubmit} className="space-y-4">
          <div className="pb-0">
            {/* Dropdown Option */}
            <label htmlFor="topics" className="block mb-2 text-sm font-medium text-white">Topic</label>
            <select id="topic" required className="bg-transparent border border-gray-300 text-white text-sm rounded-sm block w-full p-2.5">
              <option selected hidden disabled>Select a Topic</option>
              <option value="1">Rental House</option>
              <option value="2">Rental Flat</option>
              <option value="3">PGs</option>
              <option value="4">Godowns</option>
            </select>
          </div>
          <div className="pb-0">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Name</label>
            <div className="relative">
              {/* Name Input Field */}
              <input type="text" name="name" id="name" className="mb-2 bg-transparent text-white border border-gray-300 sm:text-sm rounded-sm block w-full p-2.5 py-3 px-4" placeholder="Your Name" required />
            </div>
          </div>
          <div className="pb-0">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email</label>
            <div className="relative">
              {/* Email Input Field */}
              <input type="email" name="email" id="email" className="mb-2 bg-transparent text-white border border-gray-300 sm:text-sm rounded-sm block w-full p-2.5 py-3 px-4" placeholder="name@company.com" required />
            </div>
          </div>
          <div className="pb-0">
            <label htmlFor="message" className="inline mb-2 text-sm font-medium text-white">Message</label>
            <span className="block float-right mb-2 text-sm text-gray-500">300 characters</span>
            <div className="relative">
              {/* Message writing area */}
              <textarea name="message" id="message" placeholder="Type your Message..." rows={3} maxLength="300" className="mb-2 bg-transparent text-white border border-gray-300 sm:text-sm rounded-sm block w-full p-2.5 py-3 px-4" />
            </div>
          </div>
          <ReCAPTCHA
            sitekey="6Le3ojcqAAAAABYw--yiLX9gqFUXD6iFhRQcpaQd"
            theme="dark"
            onChange={onChange}
          />
          {/* Form Submit button */}
          <button type="submit" className="w-full text-black bg-[#04C4B1] hover:bg-teal-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6">Submit query</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
