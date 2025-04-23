import { useState, useEffect } from "react";

function LoadingText() {
  const frases: string[] = [
    "Invocando os scripts...",
    "Compilando pixels...",
    "Carregando feitiços...",
    "Renderizando magias...",
    "Quase lá, guerreiro..."
  ];

  const [index, setIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % frases.length);
        setFade(true); // fade in
      }, 300); // tempo do fade out
    }, 2000); // muda a frase a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-4">
      <p
        className={`text-white text-xl transition-opacity duration-300 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {frases[index]}
      </p>
    </div>
  );
}

export default LoadingText;
