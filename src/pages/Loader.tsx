import LoadingText from "../components/Frases";
import Attack from "../assets/img/Attack.gif";

export default function Loader() {
    

    
  return (
    
    <div className="flex justify-center flex-col items-center h-screen w-screen  bg-stone-800 font-['Silkscreen']">
        <p className="text-white text-3xl absolute top-70 text-center ">Loading<span className="animate-type [animation-delay:0s]">.</span><span className="animate-type [animation-delay:0.3s]">.</span><span className="animate-type [animation-delay:0.6s]">.</span>
        <LoadingText/></p>
        
      <div className="flex flex-col w-1/2 h-full justify-center items-center flex-nowrap relative">
        
        <div className="rpgui-progress lg:max-w-1/2 ">
        <div className="rpgui-progress-right-edge"></div>
        <div className="rpgui-progress-track">
            <div className="rpgui-progress-fill blue animate-progress"></div>
        </div>
        <div className="rpgui-progress-left-edge"></div>
        </div>
        
        <img src={Attack} alt="" className="w-64 absolute mt-0 left-[-100px] lg:left-10"/>
      </div>
    </div>
    
  );
}