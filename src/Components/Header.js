import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="flex">
        <div className="flex justify-center">
          <Link to="/">
            <h3>julian.</h3>
          </Link>
        </div>

        <div className="flex-grow"></div>

        <div className="">
          <nav className="flex">
            <Link to="/photography">
              <li className="list-none mr-4 ml-4">photos</li>
            </Link>
            <Link to="/about">
              <li className="list-none  mr-4 ml-4">about</li>
            </Link>
            <li className="list-none mr-4 ml-4">
              <a
                href="https://drive.google.com/file/d/1peH6zemFhXgpMrMUPJ5urUBlsV3HrWLZ/view?usp=drive_link"
                target="_blank"
              >
                resume
              </a>
            </li>
          </nav>
        </div>
      </div>
    </>
  );
}
