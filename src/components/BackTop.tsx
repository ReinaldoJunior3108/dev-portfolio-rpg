import { useEffect, useRef, useState } from "react";

export default function BackTop() {
  const [showButton, setShowButton] = useState(false);
  const scrollContainerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const scrollContainer = document.querySelector(
      "#scrollable-container"
    ) as HTMLElement;
    scrollContainerRef.current = scrollContainer;

    const handleScroll = () => {
      if (scrollContainer.scrollTop > 150) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () =>
      scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    scrollContainerRef.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return showButton ? (
    <button
      onClick={scrollToTop}
      className="!fixed flex justify-center opacity-80 items-center rpgui-container framed-golden bottom-3 right-2 z-[9999] bg-purple-800 text-white w-12 h-12 rounded-md font-['Silkscreen'] hover:bg-purple-600 transition"
    >
      ↑
    </button>
  ) : null;
}
