import { TabList, Tab } from "react-tabs";

export default function SideBar() {
  return (
    <div className=" rounded-xs h-[80vh]">
      <div className="flex h-[95vh] flex-col items-center justify-between  w-64 p-4 text-center relative bg-gray-900 rounded-xs after:content-[''] after:bg-[url('./assets/border.jpeg')] after:bg-[length:32px_32px] after:bg-repeat-round after:absolute after:w-[calc(100%+10px)] after:h-[calc(100%+10px)] after:rounded-xs after:top-1/2 after:left-1/2 after:translate-x-[-50%] after:translate-y-[-50%] after:shadow-2xl after:shadow-black after:-z-1">
        <img
          src="src/assets/logo.png"
          alt="Logo"
          className="mx-auto mb-1 w-[40%] mt-3 p-2 border-b-2 border-b-gray-800 border-r-2 border-r-gray-800 border-l-2 border-l-black border-t-2 border-t-black"
        />
        <h2 className="text-white font-bold mt-2 mb-1">Reinaldo Junior</h2>
        <TabList className="flex flex-col items-center mt-4 w-full h-full">
          <Tab
            selectedClassName="react-tabs__tab--selected"
            className="list-none w-[90%] text-white font-['Press_Start_2P'] bg-[url('./assets/buttons.png')] bg-cover bg-center p-2 my-2 hover:saturate-0 transition"
          >
            Home
          </Tab>
          <Tab className="list-none w-[90%] text-white font-['Press_Start_2P'] bg-[url('./assets/buttons.png')] bg-cover bg-center p-2 my-2 hover:saturate-0 transition">
            My Profile
          </Tab>
          <Tab className="list-none w-[90%] text-white font-['Press_Start_2P'] bg-[url('./assets/buttons.png')] bg-cover bg-center p-2 my-2 hover:saturate-0 transition">
            Skills
          </Tab>
          <Tab className="list-none w-[90%] text-white font-['Press_Start_2P'] bg-[url('./assets/buttons.png')] bg-cover bg-center p-2 my-2 hover:saturate-0 transition">
            Projects
          </Tab>
          <Tab className="list-none w-[90%] text-white font-['Press_Start_2P'] bg-[url('./assets/buttons.png')] bg-cover bg-center p-2 my-2 hover:saturate-0 transition">
            Contact
          </Tab>
          <Tab className="list-none w-[90%] text-white font-['Press_Start_2P'] bg-[url('./assets/buttons.png')] bg-cover bg-center p-2 my-2 hover:saturate-0 transition">
            Blog
          </Tab>
          <Tab className="list-none w-[90%] text-white font-['Press_Start_2P'] bg-[url('./assets/buttons.png')] bg-cover bg-center p-2 my-2 hover:saturate-0 transition">
            About
          </Tab>
        </TabList>
      </div>
    </div>
  );
}
