import { Hero, H2, H3, Text, SmalText } from "../components/ui/typografia.jsx";
import Geist from "../assets/images/geist.svg?react";
import { ButtonPrimary, ButtonSecondary } from "../components/ui/button.jsx";
import ProjectCard from "../components/ui/ProjectCard.jsx";
import InfoCard from "../components/ui/InfoCard.jsx";
import EmojiFelipe from "../assets/images/emoji-felipe.png";
import Desknotes from "../assets/images/Desknotes.png";
import Bookshelf from "../assets/images/Bookshelf.png";
import TechStak from "../assets/images/TechStack.png";
import Vector from "../assets/icons/Vector.svg?react"

function Home() {
  return (
    <>
      <div className="w-[1024px] flex mt-20">
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
          <Geist width={300} height={300} className="" />
        </div>
      </div>

      <div className="w-[1024px] mt-50 mb-25">
        <H2 className="mb-8">Trabalhos Selecionados</H2>

        <div className="w-full flex flex-col gap-8">
          <ProjectCard
            title="Lorem ipsum dolor sit ameto"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, rerum sunt! Laudantium ab ullam, natus obcaecati eius voluptatum esse quo sint nobis pariatur animi delectus, veritatis eaque cupiditate ea rerum."
            ctaButton="Visitar Site"
          ></ProjectCard>
        </div>
      </div>

      <div className="w-full max-w-[1024px] mx-auto">
        <H2 className="mb-8">Conheça-me</H2>
        <div className="grid grid-cols-2 gap-8">
          <InfoCard
            title="Sobre mim"
            description="Quem sou eu e o que faço"
            image={EmojiFelipe}
          />
          <InfoCard
            title="Notebook"
            description="Meus pensamentos, insights e reflexões"
            image={Desknotes}
          />
          <InfoCard
            title="Estante de livros"
            description="Livros e lições de sabedoria que gostei de ler"
            image={Bookshelf}
          />
          <InfoCard
            title="Stack"
            description="Minha pilha de tecnologia atual"
            image={TechStak}
          />
        </div>
      </div>

      <div className="flex w-[1024px] justify-between mt-30 mb-30 items-center">
        <div>
          <H2>Vamos trabalhar juntos.</H2>
          <SmalText className="text-dark-gray w-4/5">Quer conversar sobre uma oportunidade de criar algo incrível? Estou pronto quando você estiver.</SmalText>
        </div>

        <ButtonPrimary className="h=[60px]"><Vector className="h-10" ></Vector> Entre em contato </ButtonPrimary>
      </div>
    </>
  );
}

export default Home;
