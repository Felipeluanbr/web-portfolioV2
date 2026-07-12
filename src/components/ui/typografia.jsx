function Hero(props) {
  return <h1 className={`text-display-xl font-bold ${props.className || ""}`}>{props.children}</h1>;
}

function H2(props) {
  return <h2 className={`text-display-lg font-bold ${props.className || ""}`}> {props.children}</h2>;
}

function H3(props) {
  return <h3 className={props.className || ""}>{props.children}</h3>;
} 

function Text(props){
    return <p className={`text-body-lg font-medium ${props.className || ""}`}>{props.children}</p>
}
function SmalText(props){
    return <p className={`text-body-md font-regular ${props.className || ""}`}>{props.children}</p>
} 

export { H2, Hero, H3 , Text, SmalText};
