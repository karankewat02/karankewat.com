import React from "react";
import "./Education.css";

function Education() {
  const sclDisplay = () => {
    const sclDetails = document.querySelector("#sclDetails");
    sclDetails.classList.toggle("visible");
  };
  const clgDisplay = () => {
    const sclDetails = document.querySelector("#clgDetails");
    sclDetails.classList.toggle("visible");
  };

  return (
    <div>
      <div className="education">
        <div className="options">
          <div>
            <div className="button" onClick={sclDisplay}></div>
            <p>Schooling</p>
            <div id="sclDetails" className="detail">
              St. Gabries Sen. Sec. School Ranjhi, Jabalpur. (Class 1 to 12)
              <br />
              <a
                href="https://www.gabrielsjbp.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Know More</button>
              </a>
            </div>
          </div>
          <div>
            <div className="button" onClick={clgDisplay}></div>
            <p>Graduation</p>
            <div id="clgDetails" className="detail">
              Gyan Ganga institue of Technology and Sciences (Btech - Computer
              Science)
              <br />
              <a
                href="https://ggits.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Know More</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
