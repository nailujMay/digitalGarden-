export default function Body() {
  return (
    <div className=" bottom-0 md:flex ">
      <div className="w-1/1 ml-20 mr-20 mb-10 md:w-1/3 md:m-10 ">
        <h1 className="border-b-2 font-roboto_mono text-xs pb-1 ">about</h1>
        <p className="font-roboto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quia,
          tempora voluptas id deleniti recusandae quibusdam. Facere at ab
          impedit voluptas delectus, eum iusto expedita? Nesciunt maxime dolores
          aut sequi!
        </p>
      </div>
      <div className="w-1/1 ml-20 mr-20 mb-10 md:w-1/3 md:m-10">
        <h1 className="border-b-2 font-roboto_mono text-xs pb-1">experience</h1>
        <p className="border-b-2 mt-2 mb-2 font-roboto">
          Mechatronics Intern @Watonomous{" "}
        </p>
        <p className="border-b-2 mt-2 mb-2 font-roboto">
          R&D intern @Vital Bio
        </p>
        <p className="border-b-2 mt-2 mb-2 font-roboto">
          Mechanical Engineering Intern @ATS automation
        </p>
      </div>
      <div className="w-1/1 ml-20 mr-20 mb-10 md:w-1/3 md:m-10">
        <h1 className="border-b-2 font-roboto_mono text-xs pb-1">currently</h1>
        <li className="font-roboto">3A study term @uw</li>
        <li className="font-roboto">taking photos </li>
        <li className="font-roboto">failing thermodynamics :/</li>
      </div>
    </div>
  );
}
