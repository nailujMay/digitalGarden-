import { Link } from "react-router-dom";
import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const togglePortfolioDropdown = () => {
    console.log("portfolio pressed");
    setIsPortfolioOpen(!isPortfolioOpen);
  };

  const toggleResumeDropdown = () => {
    console.log("resume pressed");
    setIsResumeOpen(!isResumeOpen);
  };

  const handleClosePortfolio = () => {
    setIsPortfolioOpen(false);
    setIsResumeOpen(false);
  };

  return (
    <>
      <div className="flex top-0 w-full h-8 bg-custom-black ">
        <div className="flex items-center ml-8 text-white p-2 ">
          <FontAwesomeIcon className="mr-4" icon={faGithub} />
          <FontAwesomeIcon className="mr-4" icon={faLinkedin} />
          <FontAwesomeIcon className="mr-4" icon={faInstagram} />
          <FontAwesomeIcon className="mr-4" icon={faEnvelope} />
        </div>

        <div className="flex-grow"></div>

        <div className="flex items-center text-white p-2 font-roboto_mono text-xs">
          <nav className="flex">
            <Link to="/photography">
              <li className="list-none mr-16 ml-16 ">photos</li>
            </Link>
            <div className="relative">
              <li
                className="list-none  mr-16 ml-16 cursor-pointer"
                onClick={togglePortfolioDropdown}
              >
                portfolio
              </li>
              {isPortfolioOpen && (
                <ul className=" absolute flex justify-center top-full left-0 w-full bg-custom-black p-2">
                  <div>
                    <li className="p-1">Mechanical </li>
                    <li className="p-1">Photography</li>
                  </div>
                </ul>
              )}
            </div>
            <div className="relative ">
              <li
                className="list-none mr-16 ml-16 cursor-pointer"
                onClick={toggleResumeDropdown}
              >
                resume
              </li>
              {isResumeOpen && (
                <ul className=" absolute flex justify-center top-full left-0 w-full bg-custom-black p-2">
                  <div>
                    <li className="p-1">Mechanical </li>
                    <li className="p-1">Software</li>
                  </div>
                </ul>
              )}
            </div>
          </nav>
        </div>
      </div>
      {(isPortfolioOpen || isResumeOpen) && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-transparent"
          onClick={handleClosePortfolio}
        ></div>
      )}
    </>
  );
}
