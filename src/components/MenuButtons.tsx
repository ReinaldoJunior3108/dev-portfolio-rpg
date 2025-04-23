import { Tab } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const tabStyles = "list-none w-[90%] text-white font-['Press_Start_2P'] bg-[url('./assets/buttons.png')] bg-cover bg-center p-2 my-2 hover:saturate-0 transition";

type Props = {
  children: string;
};
export default function MenuButtons({ children }: Props) {
  return (
    <Tab className={tabStyles}>
      {children}
    </Tab>

    // <button onClick={onClick} className="w-[90%] text-white font-['Press_Start_2P'] bg-[url('./assets/buttons.png')] bg-cover bg-center p-2 my-2 hover:saturate-0 transition">
    //   {text}
    // </button>
  );
}
