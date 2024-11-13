import React from "react";
import "../comingsoon/comingsoon.css";

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <div className="content">
        <h1>COMING SOON</h1>
        <p>
          We're crafting something amazing.
          <br />
          Join the StucyBoosta Community for updates.
        </p>
        <a
          href="https://chat.whatsapp.com/I2FEWTyTANI5F3sVWRQJD8"
          className="notify-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join StudyBoosta Community on WhatsApp
        </a>
      </div>
      <div className="footer">
        <p>Coming Soon..</p>
      </div> 
    </div>
  );
};
export default ComingSoon;
