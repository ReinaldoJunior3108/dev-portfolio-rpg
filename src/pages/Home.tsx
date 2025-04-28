import Reinaldo from "../assets/img/reinaldo.png";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  
    return (
        <div>
                          <h1>Bem-vindo ao meu portfólio!</h1>
                          <div className="md:max-w-[60%] text-left mt-5 ml-6 ">
                            <p className="text-white font-['JetBrains_Mono','monospace'] font-bold text-2xl ">
                              Reinaldo Junior
                            </p>
                            <p className="text-white font-['JetBrains_Mono','monospace']  text-1xl mt-2">
                              Level 19 Front-End Developer
                            </p>
                          </div>
                          <br />
                          <hr className="golden md:max-w-[76%]" />
                          <img
                            src={Reinaldo}
                            alt="Reinaldo Junior"
                            className="hidden fixed md:block lg:block bottom-9 right-[-3rem] w-[32rem] "
                          />
                          <div className="mt-6 ml-6 md:max-w-[60%] text-wrap ">
                            <TypeAnimation
                              className="text-left"
                              sequence={[
                                // Same substring at the start will only be typed out once, initially
                                "Olá guerreiro! Seja muito bem-vindo ao meu cantinho digital. Aqui você vai conhecer mais sobre mim, meus projetos, habilidades e paixões. Fique à vontade para explorar — e prepare-se para uma jornada cheia de pixel art e criatividade! ",
                              ]}
                              wrapper="p"
                              speed={80}
                              repeat={1}
                            />
                            <div className="mt-12 md:mt-5 text-left">
                              <p className="opacity-0 mb-2 animate-fade [animation-delay:5s]">
                                💻 Programador Front-End
                              </p>
                              <p className="opacity-0 mb-2 animate-fade [animation-delay:6s]">
                                🎓 Cursando Análise e Desenvolvimento de Sistemas
                              </p>
                              <p className="opacity-0 mb-2 animate-fade [animation-delay:7s]">
                                🇬🇧 Inglês Intermediário
                              </p>
                              <p className="opacity-0 mb-10 animate-fade [animation-delay:8s]">
                                📚 Aprendendo JavaScript e React
                              </p>
                            </div>
                          </div>
                          <hr className="golden md:max-w-[67%]" />
                          <br />
                          <p className="rpgui-container mt-5 framed-grey md:max-w-[60%] p-2 mb-4">
                            🎯 Objetivo: Explorar o portfólio e encontrar inspiração!
                          </p>
                          <p className="rpgui-container framed-grey md:max-w-[60%] p-2">
                            💡 Dica: Comece pelo botão <strong>My Profile</strong>
                          </p>
                          </div>
    )
}