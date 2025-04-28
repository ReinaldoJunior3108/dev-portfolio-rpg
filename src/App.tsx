import "./App.css";
import { Tab, Tabs, TabPanel, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState, useRef } from "react";
import Loader from "./pages/Loader";
import "./assets/rpgui.css";
import logo from "./assets/img/logo.png";
import HardSkills from "./components/HardSkills";
import SoftSkills from "./components/SoftSkills";
import MenuHamburguer from "./components/MenuHamburguer";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import BackTop from "./components/BackTop";
import ProjectsGrid from "./pages/ProjectsGrid";
import Contact from "./pages/Contact";
import About from "./pages/About";

const tabStyles =
  "relative  list-none w-[90%] h-full flex items-center justify-center  text-white font-['Silkscreen'] bg-[url('./assets/img/button.png')] bg-size-[length:100%_100%] bg-cover bg-center bg-no-repeat  p-2 transition border-purple-700 hover:bg-[url('./assets/img/button-hover.png')] hover:bg-size-[length:100%_100%] hover:bg-cover hover:bg-center hover:bg-no-repeat  outline-none";
const tabStylesSkills =
  "relative  list-none w-[80%] md:w-[40%] h-20 flex items-center justify-center  text-white font-['Silkscreen'] bg-[url('./assets/img/button.png')] bg-size-[length:100%_100%] bg-cover bg-center bg-no-repeat  p-2 transition border-purple-700 hover:bg-[url('./assets/img/button-hover.png')] hover:bg-size-[length:100%_100%] hover:bg-cover hover:bg-center hover:bg-no-repeat  outline-none";
const tabActive =
  " bg-[url('/button-down.png')] bg-size-[length:100%_100%] bg-cover bg-center bg-no-repeat  p-2 my-2 transition outline-none";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoading(false), 9000);
  }, []);

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
  const [tabIndex, setTabIndex] = useState(0);

  // Carrega o índice salvo do localStorage ao montar
  useEffect(() => {
    const savedTab = localStorage.getItem("selectedTab");
    if (savedTab) setTabIndex(Number(savedTab));
  }, []);

  // Salva sempre que o índice mudar
  const handleTabChange = (index: number) => {
    setTabIndex(index);
    localStorage.setItem("selectedTab", String(index));
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="rpgui-content h-dvh">
          <Tabs className=" flex justify-center items-center w-screen h-dvh  " selectedIndex={tabIndex} onSelect={handleTabChange} >
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className={`${menuOpen ? "hidden" : "block"}`}
            >
              <MenuHamburguer onClick={() => setMenuOpen(!menuOpen)} />
            </div>
            <BackTop />
            <div className="flex gap-8 h-[95dvh]">
              <div
                //@ts-ignore
                ref={menuRef}
                className={`
                  fixed top-0 left-0 z-40 h-full transition-transform duration-300
                  w-[70vw] max-w-xs lg:static lg:transform-none lg:w-[25vw] pixelated
                  ${
                    menuOpen ? "translate-x-0" : "-translate-x-full"
                  } lg:translate-x-0
                `}
              >
                <div className="flex h-[95dvh]  flex-col items-center justify-between p-4 text-center  bg-gray-900 rounded-xs rpgui-container framed">
                  <img
                    src={logo}
                    alt="Logo"
                    className="mx-auto mb-1 w-40 mt-3  rpgui-container framed-grey pixelated"
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

              <div
                id="scrollable-container"
                className="flex-1 font-['Silkscreen'] text-white  p-4 text-center relative h-full rpgui-container framed overflow-y-scroll "
              >
                <TabPanel className="flex justify-center flex-col items-center lg:w-[60vw]  text-[1rem] md:text-[0.8rem] ">
                  <Home />
                </TabPanel>
                <TabPanel className="flex justify-center flex-col items-center lg:w-[60vw] relative text-[0.8rem] font-['JetBrains_mono'] p-4 ">
                  <Profile />
                </TabPanel>
                <TabPanel className="flex justify-center flex-col items-center font-['JetBrains_mono'] lg:w-[60vw] relative text-[0.8rem]">
                  <p className="text-2xl text-left font-bold px-4">
                    Minhas habilidades
                  </p>
                  <Tabs >
                    <TabList>
                      <div className="flex justify-center items-center flex-col lg:flex-row md:gap-12 mt-5">
                        <Tab
                          className={tabStylesSkills}
                          selectedClassName={tabActive}
                        >
                          Hard Skills
                        </Tab>
                        <Tab
                          className={tabStylesSkills}
                          selectedClassName={tabActive}
                        >
                          Soft Skills
                        </Tab>
                      </div>
                    </TabList>
                    <TabPanel className="flex justify-center flex-col items-center lg:w-[60vw] relative text-[0.8rem] px-4">
                      <HardSkills />
                    </TabPanel>
                    <TabPanel className="flex justify-center flex-col items-center lg:w-[60vw] relative text-[0.8rem] px-4">
                      <SoftSkills />
                    </TabPanel>
                  </Tabs>
                </TabPanel>
                <TabPanel className="flex justify-center flex-col items-center lg:w-[60vw] relative text-[0.8rem]">
                  <ProjectsGrid />
                </TabPanel>
                <TabPanel className="flex justify-center flex-col items-center w-[85vw] lg:w-[60vw] relative text-[0.8rem]">
                  <Contact />
                </TabPanel>
                <TabPanel className="flex justify-center flex-col items-center lg:w-[60vw] relative text-[0.8rem]">
                  <About />
                </TabPanel>
              </div>
            </div>
          </Tabs>
        </div>
      )}
    </>
  );
}

export default App;
