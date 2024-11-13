import { useState } from "react";
import pict1 from "../../components/assets/images/opportunity1.png";
import pict2 from "../../components/assets/images/opportunity2.jpg";
import pict3 from "../../components/assets/images/opportunity3.jpg";
import pict4 from "../../components/assets/images/opportunity4.jpg";
import pict5 from "../../components/assets/images/opportunity5.jpg";
import pict6 from "../../components/assets/images/opportunity6.jpg";
import { Link } from "react-router-dom";

function Opportunities() {
  const images = [pict1, pict2, pict3, pict4, pict5, pict6];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to move to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <section className="text-center px-4 font-bold lg:text-2xl md:text-base text-sm mt-5">
        <h6>
          Join The WhatsApp Community to Get{" "}
          <span className="text-[#ff995b]">Constant</span>{" "}
        </h6>
        <h6>
          <span className="text-[#ff995b]">Updates + Reminders</span> on
          Scholarships & Internships
        </h6>
      </section>

      <section className="mt-5 w-full flex flex-col justify-center items-center gap-5">
        <div className="relative flex flex-col justify-center items-center text-center w-full max-w-md overflow-hidden rounded-lg shadow-lg">
          <img
            src={images[currentIndex]}
            alt={`Opportunity ${currentIndex + 1}`}
            className="w-full object-cover rounded-lg"
            style={{ width: "80%", height: "600px" }}
          />
          <div>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
            >
              ◀
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
            >
              ▶
            </button>
          </div>
        </div>

        <div></div>

        <div className="text-center px-4 flex flex-col items-center mx-auto max-w-lg">
          <h4 className="font-bold lg:text-2xl md:text-base text-sm mb-3">
            Join for Free and Get Scholarship Updates
          </h4>
          <p className="text-gray-600 lg:text-sm md:text-sm text-[10px] max-w-md mx-auto mb-4">
            Stay updated with the latest scholarship and internship
            opportunities. Join our community to receive notifications on new
            opportunities as they become available.
          </p>
          <button
            className="mt-4 px-8 py-3 lg:text-base md:text-base text-sm text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 hover:bg-[#e0864f]"
            style={{ backgroundColor: "#ff995b" }} // Set initial background color
          >
            <Link to="https://chat.whatsapp.com/I2FEWTyTANI5F3sVWRQJD8">
              Join WhatsApp Community
            </Link>

            <span className="text-xl transform transition-transform duration-300">
              &#10140;
            </span>
          </button>
        </div>
      </section>
    </>
  );
}

export default Opportunities;

// function Opportunities() {
//   const images = [pict1, pict2, pict3, pict4, pict5, pict6];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Function to move to the next image
//   const nextImage = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   // Function to move to the previous image
//   const prevImage = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <>
//       <section className="text-center font-bold lg:text-2xl md:text-base text-sm mt-5">
//         <h6>
//           Join The WhatsApp Community to Get{" "}
//           <span className="text-[#ff995b]">Constant</span>{" "}
//         </h6>
//         <h6>
//           <span className="text-[#ff995b]">Updates + Reminders</span> on
//           Scholarships & Internships
//         </h6>
//       </section>

//       <section className="mt-5 w-full flex flex-col justify-center items-center gap-5">
//         <div className="relative flex flex-col justify-center items-center text-center w-full max-w-md overflow-hidden rounded-lg shadow-lg">
//           <img
//             src={images[currentIndex]}
//             alt={`Opportunity ${currentIndex + 1}`}
//             className="w-full object-cover rounded-lg"
//             style={{ width: "80%", height: "600px" }}
//           />
//           <div>
//             <button
//               onClick={prevImage}
//               className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
//             >
//               ◀
//             </button>
//             <button
//               onClick={nextImage}
//               className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
//             >
//               ▶
//             </button>
//           </div>
//         </div>

//         <div></div>

//         <div className="text-center flex flex-col items-center mx-auto max-w-lg">
//           <h4 className="font-bold lg:text-2xl md:text-base text-sm mb-3">
//             Join for Free and Get Scholarship Updates
//           </h4>
//           <p className="text-gray-600 text-sm max-w-md mx-auto mb-4">
//             Stay updated with the latest scholarship and internship
//             opportunities. Join our community to receive notifications on new
//             opportunities as they become available.
//           </p>
//           <button
//             className="mt-4 px-8 py-3 text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 hover:bg-[#e0864f]"
//             onClick={() =>
//               window.open("https://wa.me/your-community-link", "_blank")
//             }
//             style={{ backgroundColor: "#ff995b" }} // Set initial background color
//           >
//             Join WhatsApp Community
//             <span className="text-xl transform transition-transform duration-300">
//               &#10140;
//             </span>
//           </button>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Opportunities;
