import { FaBookOpen, FaBrain, FaBriefcase } from "react-icons/fa";
import pict1 from '../../components/assets/images/read.jpg'

// import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center mt-5 px-3 md:px-10 lg:px-20 gap-4">
        <div className="flex-1 mb-4 md:mb-0">
          <img
            src={pict1}
            alt="img 1"
            className="h-[20rem] md:h-80 lg:h-96 rounded-2xl clip-pentagon object-cover w-full shadow-lg"
          />
        </div>

        <div className="flex-1 text-center md:text-start lg:text-start">
          <h4 className="font-bold text-2xl md:text-3xl lg:text-4xl pb-4 w-full max-w-[30rem]">
            What’s Holding You Back from Reaching your Full Potential as a
            Student?
          </h4>
          <p className="text-sm md:text-base text-gray-200 lg:text-lg w-full max-w-[30rem] leading-relaxed">
            StudyBoosta is your one click to open doors you didn’t know existed.
            Transform your university experience with easy access to your past
            questions, simplified course tutorials, exclusive scholarship and
            internship updates, and in-demand digital skills. We’re here to fuel
            your success every step of the way.
          </p>
        </div>
      </section>

      <section className="mt-5 lg:px-12 md:px-8 px-8">
        <h6 className="text-4xl pb-5 text-center">Why StudyBoosta works</h6>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="pt-5 flex flex-col gap-3 items-center text-center">
            <FaBookOpen className="text-[5rem] text-center text-[#ff995b]" />
            <h2 className="text-2xl">Personalized learning</h2>
            <p className="text-sm text-gray-200">
              StudyBoosta tailors learning to your needs with progress tracking
              and personalized recommendations.
            </p>
          </div>
          <div className="pt-5 flex flex-col gap-3 items-center text-center">
            <FaBrain className="text-[5rem] text-[#ff995b]" />
            <h2 className="text-2xl">Centralized Resources</h2>
            <p className="text-sm text-gray-200">
              StudyBoosta centralizes all your study materials—past questions,
              tutorials and resources.
            </p>
          </div>
          <div className="pt-5 flex flex-col gap-3 items-center text-center">
            <FaBriefcase className="text-[5rem] text-[#ff995b]" />
            <h2 className="text-2xl">Career and Skill Development</h2>
            <p className="text-sm text-gray-200">
              StudyBoosta supports your academic journey while helping you build
              career skills with access to scholarships and skill-enhancing
              content.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center text-center px-8 mt-5 py-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
          How to navigate the StudyBoosta platform
        </h1>

        <div className="w-full max-w-4xl">
          <video controls className="w-full rounded-lg shadow-xl">
            <source src="video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </>
  );
};

export default HomePage;
