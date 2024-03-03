import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="flex fixed top-0 w-full bg-black">
        <div className="flex justify-center text-white p-2 ">
          <Link to="/">
            <h3>julian.</h3>
          </Link>
        </div>

        <div className="flex-grow"></div>

        <div className="text-white p-2">
          <nav className="flex">
            <Link to="/photography">
              <li className="list-none mr-4 ml-4">photos</li>
            </Link>
            <Link>
              <li className="list-none  mr-4 ml-4">portfolio</li>
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
