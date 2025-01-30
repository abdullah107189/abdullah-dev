import { useState } from "react";
import SectionHeader from "../../../Components/SectionHeader";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const ContactInformation = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setStatus("Email sent successfully!");
  };

  const phoneNumber = "+8801771542594";
  const whatsappNumber = "+8801771542594";
  const location = "Rajshahi, Dhaka";

  return (
    <div className="">
      <SectionHeader title={"Contact"}></SectionHeader>
      <div className="grid dark:text-white grid-cols-1 md:grid-cols-2 gap-6 md:p-6 p-3 rounded-2xl border dark:border-gray-700 shadow mb-5">
        {/* Left Column: Email Form */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 border dark:border-gray-700 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Send Me an Email</h3>
          <form onSubmit={handleEmailSubmit}>
            <div className="mb-4">
              <label className="block" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full p-2 rounded-lg focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block" htmlFor="message">
                Message:
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows="4"
                className="mt-1 block w-full p-2 focus:outline-none rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="black px-5 rounded-full py-2 border border-[#60f318] hover:shadow-[#60f318] hover:shadow-custom font-semibold hover:bg-[#60f318]/10 hover:black transition duration-200"
            >
              Send Email
            </button>
          </form>
          {status && <p className="mt-2 text-green-600">{status}</p>}
        </div>

        {/* Right Column: Contact Details */}

        <div className="bg-gray-100 dark:bg-gray-800 border dark:border-gray-700 md:p-6 p-4 rounded-lg shadow-lg ">
          <h3 className="text-3xl font-semibold dark:text-gray-200 text-gray-800 mb-6 text-center">
            Contact Details
          </h3>

          <div className="flex items-center flex-col justify-center">
            <div className="mb-6">
              <h4 className="text-lg mb-3 font-semibold text-center">Phone</h4>
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-3 text-blue-500 bg-blue-300/20 p-3 border rounded-lg hover:bg-blue-200 transition duration-300"
              >
                <FaPhoneAlt className="h-6 w-6 text-blue-600" />
                {phoneNumber}
              </a>
            </div>
            <div className="mb-6">
              <h4 className="text-lg mb-3 font-semibold text-center">
                WhatsUp
              </h4>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                className="flex items-center gap-3 text-blue-500 bg-blue-300/20 p-3 border rounded-lg hover:bg-blue-200 transition duration-300"
              >
                <FaWhatsapp className="h-6 w-6 text-blue-600" />
                {whatsappNumber}
              </a>
            </div>

            <div className="mb-6">
              <h4 className="text-lg mb-3 font-semibold text-center">
                Location
              </h4>
              <div className="flex items-center gap-3 text-blue-500 p-3 rounded-lg transition duration-300">
                <FaMapMarkerAlt className="h-6 w-6 " />
                <p className="dark:text-gray-200 text-gray-700">{location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
