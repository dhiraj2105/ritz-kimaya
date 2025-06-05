// "use client";

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import logo from "../assets/Kimaya_Greens_Hero_Image.jpg";

// export default function PopupForm() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [status, setStatus] = useState("");

//   useEffect(() => {
//     const timer = setTimeout(() => setIsOpen(true), 1000);

//     const handleOpenPopup = () => setIsOpen(true);
//     window.addEventListener("openPopup", handleOpenPopup);

//     return () => {
//       clearTimeout(timer);
//       window.removeEventListener("openPopup", handleOpenPopup);
//     };
//   }, []);

//   const closeModal = () => {
//     setIsOpen(false);
//     setStatus("");
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Submitting...");

//     try {
//       const response = await fetch(
//         "https://script.google.com/macros/s/AKfycbwFUrsuEzkLUjc07z9MXmKwKSb1zGNo8gCJrmNLI0mCqkhopIjdHYqzvT2zcTKMpqL7Xg/exec",
//         {
//           method: "POST",
//           body: JSON.stringify(formData),
//         }
//       );

//       const result = await response.json();
//       if (result.result === "success") {
//         setStatus("Form submitted successfully!");
//         setFormData({ name: "", email: "", phone: "", message: "" });
//       } else {
//         setStatus("Failed to submit. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setStatus("Submission error. Please try again later.");
//     }
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           {/* Backdrop */}
//           <motion.div
//             className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={closeModal}
//           />

//           {/* Modal */}
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center z-50 px-4"
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.95 }}
//           >
//             <div className="bg-white w-full max-w-4xl rounded-3xl shadow-xl relative flex flex-col md:flex-row overflow-hidden max-h-[90vh]">
//               {/* Close Button */}
//               <button
//                 onClick={closeModal}
//                 aria-label="Close popup"
//                 className="absolute top-3 right-4 text-black font-extrabold text-4xl p-2 hover:text-gray-800 z-10"
//               >
//                 ×
//               </button>

//               {/* Left Image */}
//               <div className="hidden md:block md:w-1/2 max-h-64 md:max-h-full overflow-hidden">
//                 <Image
//                   src={logo}
//                   alt="Sikka Kimaya"
//                   width={600}
//                   height={600}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Right Form */}
//               <div className="w-full md:w-1/2 p-6 md:p-10 overflow-y-auto">
//                 <h2 className="text-xl font-semibold mb-4 text-gray-800">
//                   Book a Visit
//                 </h2>
//                 <form className="space-y-4" onSubmit={handleSubmit}>
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Your Name"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-xl text-gray-800"
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                   />
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-xl text-gray-800"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                   <input
//                     type="tel"
//                     name="phone"
//                     placeholder="Phone Number"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-xl text-gray-800"
//                     required
//                     value={formData.phone}
//                     onChange={handleChange}
//                   />
//                   <textarea
//                     name="message"
//                     placeholder="Write Your Message Here"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-xl text-gray-800"
//                     rows={3}
//                     value={formData.message}
//                     onChange={handleChange}
//                   />
//                   <button
//                     type="submit"
//                     className="w-full bg-[#A8BE04] py-2 rounded-xl text-white font-bold hover:bg-[#94a503] transition duration-300"
//                   >
//                     Submit
//                   </button>
//                   {status && (
//                     <p className="text-sm text-gray-600 mt-2">{status}</p>
//                   )}
//                 </form>
//               </div>
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// }

// v2

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "../assets/Kimaya_Greens_Hero_Image.jpg";
import ReCAPTCHA from "react-google-recaptcha";

export default function PopupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [captchaToken, setCaptchaToken] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1000);
    const handleOpenPopup = () => setIsOpen(true);

    window.addEventListener("openPopup", handleOpenPopup);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("openPopup", handleOpenPopup);
    };
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    setStatus("");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      setStatus("Please verify you're not a robot.");
      return;
    }

    setStatus("Submitting...");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwFUrsuEzkLUjc07z9MXmKwKSb1zGNo8gCJrmNLI0mCqkhopIjdHYqzvT2zcTKMpqL7Xg/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (result.result === "success") {
        setStatus("Form submitted successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setCaptchaToken(null); // reset captcha
      } else {
        setStatus("Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Submission error. Please try again later.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          />

          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <div className="bg-white w-full max-w-4xl rounded-3xl shadow-xl relative flex flex-col md:flex-row overflow-hidden max-h-[90vh]">
              <button
                onClick={closeModal}
                aria-label="Close popup"
                className="absolute top-3 right-4 text-black font-extrabold text-4xl p-2 hover:text-gray-800 z-10"
              >
                ×
              </button>

              <div className="hidden md:block md:w-1/2 max-h-64 md:max-h-full overflow-hidden">
                <Image
                  src={logo}
                  alt="Sikka Kimaya"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 p-6 md:p-10 overflow-y-auto">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  Book a Visit
                </h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl text-gray-800"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl text-gray-800"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl text-gray-800"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <textarea
                    name="message"
                    placeholder="Write Your Message Here"
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl text-gray-800"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                  />

                  {/* Google reCAPTCHA */}
                  <ReCAPTCHA
                    sitekey="6Lf-XVYrAAAAAMFeejFKY1OquTf-BrCgHV3l3w55"
                    onChange={handleCaptchaChange}
                  />

                  <button
                    type="submit"
                    className="w-full bg-[#A8BE04] py-2 rounded-xl text-white font-bold hover:bg-[#94a503] transition duration-300"
                  >
                    Submit
                  </button>

                  {status && (
                    <p className="text-sm text-gray-600 mt-2">{status}</p>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
