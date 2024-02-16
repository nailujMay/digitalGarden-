import Description from "./Descriptions";
import text from "./text";

export default function Projects() {
  return (
    <>
      <div>
        <h1>{text.EngTitle}</h1>
        <Description
          subtitle={text.EngSubtitle}
          description={text.EngDescription}
        />
      </div>

      <div>
        <h1>{text.PhotoTitle}</h1>
        <Description
          subtitle={text.PhotoSubtitle}
          description={text.PhotoDescription}
        />
      </div>
    </>
  );
}
