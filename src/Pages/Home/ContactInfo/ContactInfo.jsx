import { useState } from "react";
import SectionHeader from "../../../Components/SectionHeader";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaSpinner,
  FaCheckCircle,
} from "react-icons/fa";
import toast from "react-hot-toast";
import axios from "axios";
import { MdOutlineEmail } from "react-icons/md";

const ContactInformation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const emailBody = {
      service_id: "service_6s53hcj",
      template_id: "template_9w7bxbh",
      user_id: "bIMJJ1XPJW4mAIls5",
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "Md. Abdullah All Shamem",
        message: message,
      },
    };
    try {
      // Replace this with your actual API call
      const { data } = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        emailBody
      );
      console.log(data);
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Email sent successfully!");
      setLoading(false);
      // Set success state to true after successful API call
      setSuccess(true);

      // Set a timer to remove the success icon after 2 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send email.");
    } finally {
      setLoading(false);
    }
  };

  // right side
  const phoneNumber = "+8801771542594";
  const whatsappNumber = "+8801771542594";
  const location = "Rajshahi, Bangladesh";

  return (
    <div className="z-10 relative">
      <div className="md:my-10 my-5 z-10 relative">
        <SectionHeader title={"Contact"}></SectionHeader>
      </div>
      <div className="grid dark:text-white grid-cols-1 md:grid-cols-2 bg-gray-200/10 dark:bg-gray-500/20 gap-6 md:p-6 p-3 rounded-2xl border dark:border-gray-400 shadow mb-5 backdrop-blur-xl">
        {/* Left Column: Email Form */}
        <div className="dark:bg-white/10 bg-white/20 backdrop-blur-lg p-6 border dark:border-gray-400 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Send Me an Email</h3>
          <form onSubmit={handleEmailSubmit}>
            <div className="mb-4">
              <label className="block" htmlFor="yourName">
                Enter Your Name
              </label>
              <input
                type="text"
                id="yourName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder=""
                className="mt-1 block w-full p-2 rounded-lg dark:bg-white/20 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block" htmlFor="email">
                Enter Your Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full p-2 rounded-lg dark:bg-white/20 focus:outline-none"
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
                className="mt-1 block w-full p-2 dark:bg-white/20 focus:outline-none rounded-lg"
              />
            </div>
            <button type="submit" className="actionBtn">
              {loading && <FaSpinner className="animate-spin mr-2" />}
              {success ? (
                <>
                  Send Email <FaCheckCircle className="text-green-500 mr-2" />
                </>
              ) : (
                "Send Email"
              )}
            </button>
          </form>
        </div>

        {/* Right Column: Contact Details */}

        <div className="dark:bg-white/10 bg-white/20 backdrop-blur-lg border dark:border-gray-400 md:p-6 p-4 rounded-2xl shadow-lg ">
          <h3 className="text-3xl font-semibold dark:text-gray-200 text-gray-800 mb-6 text-center">
            Contact Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center ">
            <div className="mb-6 bg-gray-50/30 rounded-full">
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-3 actionBtn"
              >
                <FaPhoneAlt className="h-6 w-6 text-blue-600" />
                {phoneNumber}
              </a>
            </div>
            <div className="mb-6 bg-gray-50/30 rounded-full">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                className="flex items-center gap-3 actionBtn"
              >
                <FaWhatsapp className="h-6 w-6 text-blue-600" />
                {whatsappNumber}
              </a>
            </div>

            <div className="mb-6 bg-gray-50/30 rounded-full">
              <div className="flex items-center gap-3 text-blue-500 p-3 transition duration-300 border rounded-full">
                <FaMapMarkerAlt className="h-6 w-6 " />
                <p className="dark:text-gray-200 text-gray-700">{location}</p>
              </div>
            </div>

            <div className="mb-6 bg-gray-50/30 rounded-full">
              <div className="flex items-center gap-3 text-blue-500 p-3 transition duration-300 border rounded-full">
                <MdOutlineEmail className="h-6 w-6 " />
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
