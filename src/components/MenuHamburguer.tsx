
import { useState } from "react";
type MenuHamburguerProps = {
    onClick?: () => void; // onClick é opcional e é uma função sem argumentos
  };
export default function MenuHamburguer({onClick}: MenuHamburguerProps) {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        
        <div
              className={` !fixed flex justify-center align-center rpgui-container framed-golden h-12 w-12 opacity-75 hover:opacity-100 top-5 left-5 z-[999] md:hidden ${
                menuOpen ? "hidden" : "block"
              }`}
            >
              <span
                className="flex justify-center items-center !text-purple-300 "
                onClick={onClick}
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
    )
}