import buttonStyles from "../../utils/buttonStyles";

function ButtonPrimary(props) {
  return <button className={`${buttonStyles()} px-8 py-4 bg-gradient rounded-[9px] text-white font-medium text-18 border border-dark-card-border/38`} >{props.children}</button>;
} ;

function ButtonSecondary(props) {
  return <button className={`${buttonStyles()}  px-8 py-4 bg-onyx rounded-[9px] text-18 text-dark-gray font-medium `} > {props.children}</button>;
}


export {ButtonPrimary, ButtonSecondary}