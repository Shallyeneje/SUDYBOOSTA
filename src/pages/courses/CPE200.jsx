import React, { useState } from "react";
import "./courses.css";
// import { useExampleContext } from "../../data/third";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate for navigation

const CourseList = () => {
  const [openVideoIndex, setOpenVideoIndex] = useState(null);

  const courseItems = [
    {
        title: "Introduction to DC machines and their operation",
        type: "Video",
        duration: "30 min",
        videoUrl: "https://www.youtube.com/embed/0gWJ8OqkpHM",
      },
      {
        title: "Synchronous alternators explained",
        type: "Video",
        duration: "6 min",
        videoUrl: "https://www.youtube.com/embed/Hn3FkCOPuos",
      },
  
      {
        title: "Understanding three-phase balanced circuits",
        type: "Video",
      duration: "11 min",
      videoUrl: "https://www.youtube.com/embed/DF9TMhj4goo",
    },
    {
      title: "Three-phase power system basics",
      type: "Video",
      duration: "10 min",
      videoUrl: "https://www.youtube.com/embed/iMn7dq7B1oo",
    },
    {
      title: "Working of PN junction diode",
      type: "Video",
      duration: "15 min",
      videoUrl: "https://www.youtube.com/embed/USrY0JspDEg",
    },
    {
      title: "Transistor basics and types",
      type: "Video",
      duration: "18 min",
      videoUrl: "https://www.youtube.com/embed/J4oO7PT_nzQ",
    },
    {
      title: "How Zener diodes work",
      type: "Video",
      duration: "11 min",
      videoUrl: "https://www.youtube.com/embed/mmiHX_IzvDw",
    },
    {
        title: "Half-wave and full-wave rectifier circuits",
        type: "Video",
        duration: "14 min",
        videoUrl: "https://www.youtube.com/embed/joDlqsknn-w",
      },
      {
        title: "What is a Field Effect Transistor (FET)?",
        type: "Video",
        duration: "8 min",
        videoUrl: "https://www.youtube.com/embed/cOICDYuY-gA",
      },
      {
        title: "Open vs. closed loop control systems",
        type: "Video",
        duration: "11 min",
        videoUrl: "https://www.youtube.com/embed/XMfH2P2Fc6Q",
      },
      {
        title: "Open vs. closed loop control systems 2",
        type: "Video",
        duration: "4 min",
        videoUrl: "https://www.youtube.com/embed/DE0hWLdkckg",
      },
      {
        title: "Open vs. closed loop control systems 3",
        type: "Video",
        duration: "5 min",
        videoUrl: "https://www.youtube.com/embed/8m0VP5_feOY",
      },
  ];

  const handleVideoToggle = (index) => {
    setOpenVideoIndex(openVideoIndex === index ? null : index);
  };

  const navigate = useNavigate(); // Create a navigate function

  // Functions to handle course button navigation
  const handleCourseButtonClick = (courseId) => {
    if (courseId === "EEE212") {
      navigate("/cpe200"); // Navigate to internal page for CPE351
    } else if (courseId === "EMA212") {
      navigate("/ema212"); // Navigate to internal page for CPE361
    } else if (courseId === "MEE212") {
      navigate("/mee212"); // Navigate to internal page for CPE375
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <div>
      <div className=" dept mt-3  col-md-3"> Computer Engineering 200l</div>
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
            className="btn  active btn-outline-light"
            onClick={() => handleCourseButtonClick("EEE212")}
          >
            EEE212
          </button>
          <button
            className="btn"
            onClick={() => handleCourseButtonClick("EMA212")}
          >
            EMA212
          </button>

          <button
            className="btn"
            onClick={() => handleCourseButtonClick("MEE212")}
          >
            MEE212
          </button>
        </div>
      </div>

      <div className="container mb-3">
        <div className="row">
          {/* Course Description Section */}
          <div className="col-md-6 course-des" style={{ padding: "20px" }}>
            <h4>
              <b>MEE212</b>
            </h4>
            <h5>Electrical Engineering 2</h5>
            <p>
              Welcome to Electrical Engineering 2, a continuation of your
              foundational studies in electrical engineering. This course will
              delve into complex circuits, network theorems, and the behavior of
              AC and DC systems to enhance your analytical and problem-solving
              skills.
            </p>
          </div>

          {/* Course List Section */}
          <div className="col-md-6" style={{ padding: "20px" }}>
            <div style={{ marginBottom: "10px", fontWeight: "bold" }}>
              Course Content
            </div>
            <div
              style={{
                marginBottom: "20px",
                color: "#1a73e8",
                cursor: "pointer",
              }}
            ></div>
            <div className="course-list">
              {courseItems.map((item, index) => (
                <div key={index}>
                  <div
                    className="course-item"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "8px 0",
                      borderBottom:
                        index < courseItems.length - 1
                          ? "1px solid #ddd"
                          : "none",
                      cursor: item.videoUrl ? "pointer" : "default",
                    }}
                    onClick={() => item.videoUrl && handleVideoToggle(index)}
                  >
                    <span
                      style={{
                        color: "green",
                        fontSize: "20px",
                        marginRight: "10px",
                      }}
                    >
                      ✔️
                    </span>
                    <div style={{ flex: 1 }}>
                      <div>{item.title}</div>
                      <div style={{ fontSize: "12px", color: "gray" }}>
                        {item.type} - {item.duration}
                      </div>
                    </div>
                  </div>
                  {openVideoIndex === index && item.videoUrl && (
                    <div style={{ padding: "10px 0" }}>
                      <iframe
                        width="100%"
                        height="315"
                        src={item.videoUrl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </div>
              ))}
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

export default CourseList;
