import { Hero, H2, H3, Text, SmalText } from "../components/ui/typografia.jsx";
import Geist from "../assets/images/geist.svg?react";
import { ButtonPrimary, ButtonSecondary } from "../components/ui/button.jsx";

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

          <div className="flex gap-4 mt-10">

            <ButtonPrimary>Veja meu currículo</ButtonPrimary>
            <ButtonSecondary>Entre em contato</ButtonSecondary>

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
