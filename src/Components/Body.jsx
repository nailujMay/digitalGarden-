export default function Body() {
  return (
    <div className=" md:flex">
      <div className="w-1/1 ml-20 mr-20 mb-10 md:w-1/3 md:m-10 ">
        <h1 className="border-b-2 border-custom-black font-roboto_mono text-xs pb-1 ">
          about
        </h1>
        <p className="font-roboto mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quia,
          tempora voluptas id deleniti recusandae quibusdam. Facere at ab
          impedit voluptas delectus, eum iusto expedita? Nesciunt maxime dolores
          aut sequi!
        </p>
      </div>
      <div className="w-1/1 ml-20 mr-20 mb-10 md:w-1/3 md:m-10">
        <h1 className="border-b-2  border-custom-black font-roboto_mono text-xs pb-1">
          experience
        </h1>
        <p className="border-b-2  border-custom-black mt-2 mb-2 font-roboto">
          <span className="font-bold">Mechatronics Intern </span>{" "}
          <a
            href="https://www.watonomous.ca/"
            className="cursor-pointer underline"
          >
            @WATOnomous
          </a>
        </p>
        <p className="border-b-2 border-custom-black mt-2 mb-2 font-roboto">
          <span className="font-bold"> R&D intern </span>{" "}
          <a href="https://vitalbio.com/" className="cursor-pointer underline">
            @Vital Bio
          </a>
        </p>
        <p className="border-b-2 border-custom-black mt-2 mb-2 font-roboto">
          <span className="font-bold">Mechanical Engineering Intern </span>{" "}
          <a
            href="https://atsautomation.com/"
            className="cursor-pointer underline"
          >
            @ATS Automation
          </a>
        </p>
      </div>
      <div className="w-1/1 ml-20 mr-20 mb-10 md:w-1/3 md:m-10">
        <h1 className="border-b-2  border-custom-black font-roboto_mono text-xs pb-1">
          currently
        </h1>
        <div className="mt-2">
          <li className="font-roboto">3A study term @uw</li>
          <li className="font-roboto">taking photos </li>
          <li className="font-roboto">failing thermodynamics :/</li>
        </div>
      </div>
    </div>
  );
}
