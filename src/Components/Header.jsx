import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="flex top-0 w-full h-8 bg-black">
        <div className="flex items-center text-white p-2 ">
          <Link to="/">
            <h3>julian.</h3>
          </Link>
        </div>

        <div className="flex-grow"></div>

        <div className="flex items-center text-white p-2 font-roboto_mono text-xs">
          <nav className="flex">
            <Link to="/photography">
              <li className="list-none mr-16 ml-16 ">photos</li>
            </Link>
            <Link>
              <li className="list-none  mr-16 ml-16">portfolio</li>
            </Link>
            <li className="list-none mr-16 ml-16">
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
