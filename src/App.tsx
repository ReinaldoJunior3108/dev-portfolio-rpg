import "./App.css";
import { Tab, Tabs, TabPanel, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import "./assets/rpgui.css";
import Reinaldo from "./assets/img/reinaldo.png";
import logo from "./assets/img/logo.png";

const tabStyles =
  "relative  list-none w-[90%] h-full flex items-center justify-center  text-white font-['Silkscreen'] bg-[url('./assets/button.png')] bg-size-[length:100%_100%] bg-cover bg-center bg-no-repeat  p-2 transition border-purple-700 hover:bg-[url('src/assets/button-hover.png')] hover:bg-size-[length:100%_100%] hover:bg-cover hover:bg-center hover:bg-no-repeat  outline-none";
const tabActive =
  "bg-[url('src/assets/button-down.png')] bg-size-[length:100%_100%] bg-cover bg-center bg-no-repeat  p-2 my-2 transition outline-none";
function App() {
  const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 9000)
    }, [])
    if (loading) {
        return <Loader/>
    }
    
  return (
    <div className="rpgui-content">
      <Tabs className=" flex justify-center items-center w-screen h-screen  ">
        <div className="flex gap-8 h-[95vh]">
          <div className=" rounded-xs h-[95vh] w-[25vw]">
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
                <Tab className={tabStyles} selectedClassName={tabActive}>
                  Home
                </Tab>
                <Tab className={tabStyles} selectedClassName={tabActive}>
                  My Profile
                </Tab>
                <Tab className={tabStyles} selectedClassName={tabActive}>
                  Skills
                </Tab>
                <Tab className={tabStyles} selectedClassName={tabActive}>
                  Projects
                </Tab>
                <Tab className={tabStyles} selectedClassName={tabActive}>
                  Contact
                </Tab>

                <Tab className={tabStyles} selectedClassName={tabActive}>
                  About
                </Tab>
              </TabList>
            </div>
          </div>

          <div className="flex-1 font-['Silkscreen'] text-white  p-4 text-center h-full rpgui-container framed overflow-y-clip">
            <TabPanel className=" flex justify-center flex-col items-center w-[60vw]  relative text-[0.8rem]">
              <h1>Bem-vindo ao meu portfólio!</h1>
                <div className="max-w-[60%] text-left mt-10 ml-6">
                <p className="text-white font-['JetBrains_Mono','monospace'] font-bold text-2xl ">Reinaldo Junior</p>
                <p className="text-white font-['JetBrains_Mono','monospace']  text-1xl mt-2">Level 19 Front-End Developer</p>
                </div>
                <br />
                <hr className="golden max-w-[76%]"/>
              <img
                src={Reinaldo}
                alt="Reinaldo Junior"
                className="absolute top-6 right-[-8rem] w-[31rem] "
              />
              <div className="mt-15 ml-6 max-w-[60%] text-wrap ">
                <TypeAnimation className="text-left"
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Olá guerreiro! Seja muito bem-vindo ao meu cantinho digital. Aqui você vai conhecer mais sobre mim, meus projetos, habilidades e paixões. Fique à vontade para explorar — e prepare-se para uma jornada cheia de pixel art e criatividade! ",
                  ]}
                  wrapper="p"
                  speed={80}
                  repeat={1}
                />
                <div className="mt-12 text-left">
                <p className="opacity-0 mb-2 animate-fade [animation-delay:5s]">💻 Programador Front-End</p>
                <p className="opacity-0 mb-2 animate-fade [animation-delay:6s]">🎓 Cursando Análise e Desenvolvimento de Sistemas</p>
                <p className="opacity-0 mb-2 animate-fade [animation-delay:7s]">🇬🇧 Inglês Intermediário</p>
                <p className="opacity-0 mb-10 animate-fade [animation-delay:8s]">📚 Aprendendo JavaScript e React</p>
                </div>
              </div>
              <hr className="golden max-w-[67%]"/>
              <br />
              <p className="rpgui-container mt-5 framed-grey max-w-[60%] p-2 mb-4">
                🎯 Objetivo: Explorar o portfólio e encontrar inspiração!
              </p>
              <p className="rpgui-container framed-grey max-w-[60%] p-2">
                💡 Dica: Comece pelo botão <strong>My Profile</strong>
              </p>
              
            </TabPanel>
            <TabPanel className="flex justify-center flex-col items-center w-[60vw] relative text-[0.8rem]">
              <h1 >Perfil completo aqui</h1>
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
