import React, { useState } from "react";

import "./courses.css";

import { useNavigate, Link } from "react-router-dom"; // Import useNavigate for navigation
// import { Link } from "react-router-dom";
const Courses = () => {
  // const { Courses } = useExampleContext();
  console.log(Courses);

  const navigate = useNavigate(); // Create a navigate function

  // Functions to handle course button navigation
  const handleCourseButtonClick = (courseId) => {
    if (courseId === "CPE351") {
      navigate("/courses"); // Navigate to internal page for CPE351
    } else if (courseId === "CPE361") {
      navigate("/cpe361"); // Navigate to internal page for CPE361
    } else if (courseId === "CPE375") {
      navigate("/cpe375"); // Navigate to internal page for CPE375
    }
  };

  // State to manage dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div>
      <div className=" dept mt-3  col-md-3"> Computer Engineering 300l</div>
      <div className="Header mt-3 justify-content-center">
        
        <div className="content-header header-container col-md-3">
          <div className="dropdown">
            <div className="dropdown-btn" onClick={toggleDropdown}>
              LEVEL
              <span>{isOpen ? "▲" : "▼"}</span>
            </div>
            {isOpen && (
              <div className="dropdown-content">
                <Link
                  to="/CPE200"
                  className="dropdown-item"
                  onClick={toggleDropdown}
                >
                  CPE200
                </Link>
                <Link
                  to="/courses"
                  className="dropdown-item"
                  onClick={toggleDropdown}
                >
                  CPE300
                </Link>
                
                <Link
                  to="/CPE500"
                  className="dropdown-item"
                  onClick={toggleDropdown}
                >
                  CPE500
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="course-buttons col-6">
          <button
            className="btn active btn-outline-light"
            onClick={() => handleCourseButtonClick("CPE351")}
          >
            CPE351
          </button>
          <button
            className="btn"
            onClick={() => handleCourseButtonClick("CPE361")}
          >
            CPE361
          </button>

          <button
            className="btn"
            onClick={() => handleCourseButtonClick("CPE375")}
          >
            CPE375
          </button>
        </div>
      </div>

      {/* Video Section */}
      <div className="container">
        <div className="video-section mt-1">
          <div className="row">
            <div className="col-md-6 course-des justify-content-center">
              <h4>
                <b>CPE 351</b>
              </h4>
              <h5>Analogue Electronic Circuit</h5>
              <p>
                This is an introduction video to your course CPE 351(Analogue
                Electronic Circuit) Access other lecture videos once you're done
                with the introductory video.
              </p>
            </div>
            <div className="col-md-6">
              <div className="row info" style={{ fontFamily: "Poppins" }}>
                <p>
                  <b>COURSE CONTENT</b>
                </p>
              </div>
              <div className="row alone">
                <iframe
                  src="https://www.youtube.com/embed/oPIfXFOFy1U"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  width="100%"
                  height="250"
                  frameBorder="0"
                ></iframe>
              </div>
              <div className="row mt-3">
                <div className="col-md-4">
                  <iframe
                    src="https://www.youtube.com/embed/0BRjXG6B3-w"
                    title="YouTube video 2"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    width="100%"
                    height="200"
                    frameBorder="0"
                  ></iframe>
                </div>
                <div className="col-md-4">
                  <iframe
                    src="https://www.youtube.com/embed/ZUXG9eZfSlw"
                    title="YouTube video 3"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    width="100%"
                    height="200"
                    frameBorder="0"
                  ></iframe>
                </div>
                <div className="col-md-4">
                  <iframe
                    src="https://www.youtube.com/embed/7jw2_x8dyQ8?"
                    title="YouTube video 4"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    width="100%"
                    height="200"
                    frameBorder="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container text-center d-flex flex-column justify-content-center align-items-center"
        style={{ padding: "20px" }}
      >
        <p style={{ fontSize: "16px", fontWeight: "600", color: "white" }}>
          Do you have a topic you'd like us to add that isn't covered yet? Click
          below to let us know!
        </p>

        <a
          href="https://forms.gle/o5jQA5jbegCBAKSB6 "
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="btn"
            style={{
              backgroundColor: "#FF944D",
              color: "black",
              fontSize: "20px",
              padding: "12px 24px",
              borderRadius: "8px",
              marginTop: "20px",
              fontWeight: 500,
            }}
          >
            Request a New Topic
          </button>
        </a>
      </div>
    </div>
  );
};

export default Courses;
