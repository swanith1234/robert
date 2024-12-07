import { useState } from "react";

const Certifications = ({ userData }) => {
  const certificationImages = userData?.certifications || [];
  const [isHovered, setIsHovered] = useState(false);
  console.log(certificationImages);
  return (
    <section className="c-space my-20">
      <p className="head-text text-center text-3xl font-bold">
        My Certifications
      </p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        {/* Animated Certification Viewer */}
        <div
          className="relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`flex gap-5 animate-certifications ${
              isHovered ? "paused" : ""
            }`}
            style={{
              animationPlayState: isHovered ? "paused" : "running",
            }}
          >
            {certificationImages.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`Certification ${index + 1}`}
                className="w-40 h-40 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>

        {/* Placeholder */}
        {/* <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full flex items-center justify-center">
          <p className="text-white text-center text-lg">Certification Viewer</p>
        </div> */}
      </div>

      {/* Styles */}
      <style jsx>{`
        .animate-certifications {
          display: flex;
          animation: slide 10s linear infinite;
        }
        @keyframes slide {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .paused {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
};

export default Certifications;
