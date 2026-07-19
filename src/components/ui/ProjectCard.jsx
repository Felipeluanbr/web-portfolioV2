import { H3, SmalText } from "./typografia.jsx";
import ArrowRightIcon from "../../assets/icons/ArrowRight.svg";

function ProjectCard({ logo, title, description, image, ctaButton}) {
  return (
    <div className="w-full h-[565px] flex border border-dark-card-border/38 rounded-xl bg-onyx p-12">
      <div className=" w-3/4 flex flex-col gap-5">
        <div className="h-15 w-15 bg-medium-gray rounded-md "></div>
        <H3>{title}</H3>
        <SmalText className="text-dark-gray max-w-[500px]">{description}</SmalText>
        <div className="absolute mt-90">
          <button className="flex items-center gap-2 text-white">
            {ctaButton}
            <img src={ArrowRightIcon } alt="" className="h-4 w-4" style={{ filter: "brightness(0) invert(1)" }} />
          </button>
        </div>
      </div>
      <div className="w-1/2 h-full bg-medium-gray"></div>
    </div>
  );
}

export default ProjectCard;


