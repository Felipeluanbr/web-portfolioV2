
import { H3, SmalText } from "./typografia.jsx";

function InfoCard({title, description ,image}) {
  return (
    <div className="w-full flex flex-col h-[504px] bg-onyx rounded-xl border border-dark-card-border/38 items-center overflow-hidden">
      <div className="p-10 text-center">
        <H3>{title}</H3>
        <SmalText className="text-dark-gray">{description}</SmalText>
      </div>

      <div>
        <img className="h-full w-full object-cover" src={image} alt="" />
      </div>
    </div>
  );
}

export default InfoCard;
