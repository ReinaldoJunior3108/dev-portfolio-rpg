import "./App.css";
import { Tab, Tabs, TabPanel, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState, useRef } from "react";
import Loader from "./components/Loader";
import "./assets/rpgui.css";
import Reinaldo from "./assets/img/reinaldo.png";
import logo from "./assets/img/logo.png";

const tabStyles =
  "relative  list-none w-[90%] h-full flex items-center justify-center  text-white font-['Silkscreen'] bg-[url('./assets/img/button.png')] bg-size-[length:100%_100%] bg-cover bg-center bg-no-repeat  p-2 transition border-purple-700 hover:bg-[url('./assets/img/button-hover.png')] hover:bg-size-[length:100%_100%] hover:bg-cover hover:bg-center hover:bg-no-repeat  outline-none";
const tabActive =
  " bg-[url('/button-down.png')] bg-size-[length:100%_100%] bg-cover bg-center bg-no-repeat  p-2 my-2 transition outline-none";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 9000);
  }, []);
  if (loading) {
    return <Loader />;
  }
  const [menuOpen, setMenuOpen] = useState(false);
  //@ts-ignore
  const menuRef = useRef();

  // Fecha o menu se clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      //@ts-ignore
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="rpgui-content">
      <Tabs className=" flex justify-center items-center w-screen h-screen  ">
        <div
          className={` !fixed flex justify-center align-center rpgui-container framed-golden h-12 w-12 opacity-75 hover:opacity-100 top-5 left-5 z-[999] md:hidden ${
            menuOpen ? "hidden" : "block"
          }`}
        >
          <span
            className="flex justify-center items-center !text-purple-300 "
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {" "}
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
            </svg>
          </span>
        </div>
        <div className="flex gap-8 h-[95vh]">
          <div
            //@ts-ignore
            ref={menuRef}
            className={`
    fixed top-0 left-0 z-40 h-full transition-transform duration-300
    w-[70vw] max-w-xs lg:static lg:transform-none lg:w-[25vw]
    ${menuOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0
  `}
          >
            <div className="flex h-[95vh]  flex-col items-center justify-between p-4 text-center  bg-gray-900 rounded-xs rpgui-container framed">
              <img
                src={logo}
                alt="Logo"
                className="mx-auto mb-1 w-40 mt-3  rpgui-container framed-grey"
              />
              <h2 className="text-white font-bold mt-2 mb-1">
                Reinaldo Junior
              </h2>
              <TabList className="flex flex-col justify-center items-center mt-4 w-full h-full">
                <Tab
                  onClick={() => setMenuOpen(false)}
                  className={tabStyles}
                  selectedClassName={tabActive}
                >
                  Home
                </Tab>
                <Tab
                  onClick={() => setMenuOpen(false)}
                  className={tabStyles}
                  selectedClassName={tabActive}
                >
                  My Profile
                </Tab>
                <Tab
                  onClick={() => setMenuOpen(false)}
                  className={tabStyles}
                  selectedClassName={tabActive}
                >
                  Skills
                </Tab>
                <Tab
                  onClick={() => setMenuOpen(false)}
                  className={tabStyles}
                  selectedClassName={tabActive}
                >
                  Projects
                </Tab>
                <Tab
                  onClick={() => setMenuOpen(false)}
                  className={tabStyles}
                  selectedClassName={tabActive}
                >
                  Contact
                </Tab>

                <Tab
                  onClick={() => setMenuOpen(false)}
                  className={tabStyles}
                  selectedClassName={tabActive}
                >
                  About
                </Tab>
              </TabList>
            </div>
          </div>

          <div className="flex-1 font-['Silkscreen'] text-white  p-4 text-center relative h-full rpgui-container framed overflow-y-scroll md:overflow-y-clip">
            <TabPanel className=" flex justify-center flex-col items-center w-[80vw] lg:w-[60vw]  text-[1rem] md:text-[0.8rem]  ">
              <h1>Bem-vindo ao meu portfólio!</h1>
              <div className="md:max-w-[60%] md:text-left mt-10 ml-6">
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
                className="hidden absolute md:block lg:block bottom-0 right-[-8rem] w-[31rem] "
              />
              <div className="mt-15 ml-6 md:max-w-[60%] text-wrap ">
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
                <div className="mt-12 text-left">
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
            </TabPanel>
            <TabPanel className="flex justify-center flex-col items-center w-[60vw] relative text-[0.8rem] font-['JetBrains_Mono:mono'] p-4">
              <div className="text-left">
                <p className="text-xl font-bold mb-3">Meu Perfil</p>
                <p>A história de um mago digital em ascensão...</p>
              </div>
              <br />
              <hr className="golden" />
              <br />
              <div className="rpgui-container framed-golden text-left p-5 leading-relaxed">
                <p className="font-['JetBrains_Mono','monospace'] text-xl font-bold">
                  Reinaldo Junior
                </p>
                <p className="font-['JetBrains_Mono','monospace'] ">
                  Nivel 19 · Um jovem mago do reino digital, em constante
                  ascensão.
                </p>

                <br />
                <ul className="text-sm text-purple-200 space-y-2">
                  <li>
                    📜 <span className="text-purple-400">Classe:</span> Desenvolvedor
                    Frontend
                  </li>
                  <li>
                    ⚔️ <span className="text-purple-400">Armas:</span> HTML, CSS,
                    JavaScript, React
                  </li>
                  <li>
                    🏰 <span className="text-purple-400">Guilda:</span> RJK SHOP
                  </li>
                  <li>
                    🌍 <span className="text-purple-400">Território:</span> Toledo -
                    PR
                  </li>
                </ul>
              </div>
            </TabPanel>
            <TabPanel className="flex justify-center flex-col items-center w-[60vw] relative text-[0.8rem]">
              <h1>Minhas habilidades: React, TypeScript...</h1>
            </TabPanel>
            <TabPanel className="flex justify-center flex-col items-center w-[60vw] relative text-[0.8rem]">
              <h1>Projetos desenvolvidos</h1>
            </TabPanel>
            <TabPanel className="flex justify-center flex-col items-center w-[60vw] relative text-[0.8rem]">
              <h1>Entre em contato</h1>
            </TabPanel>
            <TabPanel className="flex justify-center flex-col items-center w-[60vw] relative text-[0.8rem]">
              <h1>Sobre mim</h1>
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </div>
  );
}

export default App;
