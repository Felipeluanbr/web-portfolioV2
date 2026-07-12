import { Hero, H2, H3, Text, SmalText } from "../components/ui/typografia.jsx";
import Geist from "../assets/images/geist.svg?react"

function Home() {
  return (
    <>
      <div className="w-[1024px] flex">
        <div className="h-[540px] flex flex-col justify-center ">
          <Hero>
            <span className="text-dark-gray">Eu</span> sou Felipe Luan
          </Hero>
          <Text className="text-dark-gray font-inter w-[720px]">
            Engenheiro de front-end e designer de UI/UX que ajuda startups a
            transformar suas visões em realidade digital. Especializo-me no
            design e desenvolvimento de aplicativos modernos para dispositivos
            móveis e web.
          </Text>

          <div>
            
          </div>
        </div>
        <div className="flex items-center justify-center">
            <Geist width={300} height={300} className=""/>
        </div>
      </div>
    </>
  );
}

export default Home;
