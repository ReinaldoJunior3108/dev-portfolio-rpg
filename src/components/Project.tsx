import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
type Props = {
  title: string;
  description: string;
  category: string[];
  image: string;
  innerdesc: string;
  git: string;
  deploy:string;
};

export default function Project({
  title,
  description,
  category,
  image,
  innerdesc,
  git,
  deploy
}: Props) {
    const contentStyle = { background: 'none', border:'none', width:'100%'};
const overlayStyle = { background: 'rgba(0,0,0,0.5)' };
const arrowStyle = { color: '#000' };
  const tabStyles =
    "relative mt-auto list-none w-full h-20 flex items-center justify-center  text-white font-['Silkscreen'] bg-[url('./assets/img/button.png')] bg-size-[length:100%_100%] bg-cover bg-center bg-no-repeat  p-2 transition border-purple-700 hover:bg-[url('./assets/img/button-hover.png')] hover:bg-size-[length:100%_100%] hover:bg-cover hover:bg-center hover:bg-no-repeat  outline-none";
  return (
    <div className="rpgui-container framed-golden p-4 h-full flex flex-col">
      <p className="text-xl mt-3 font-bold">{title}</p>
      <br />
      <hr className="golden" />
      <br />
      <img src={image} alt="" />
      <br />
      <div className="flex flex-wrap justify-center items-center text-left">
        {category.map((categorys, index) => (
          <p
            key={index}
            className="rpgui-container framed-grey text-sm text-left"
          >
            {categorys}
          </p>
        ))}
      </div>

      <hr />
      <p className="text-left">{description}</p>
      <hr />
      <Popup trigger={<div className={tabStyles}>Detalhes</div>}{...{ contentStyle, overlayStyle, arrowStyle }} modal 
      > 
      {/* @ts-ignore */}
   {(close: any) => ( 
    <>
      <div className="rpgui-container framed-golden flex p-4 flex-col w-[100%] mx-auto md:w-[50%] justify-center items-center">
        <p className="text-2xl font-bold mt-3 text-white">{title}</p>
        <br /><hr className="golden"/>
        <img src={image} alt="" className="w-[50%]" />
        <br />
        <p className="text-left w-[50%] text-white">{innerdesc}</p>
        <br />
        <div className="flex flex-col gap-4 w-[50%]">
          <a href={deploy} className={tabStyles}>Ver Projeto</a>
          <a href={git} className={tabStyles}>Ver Código</a>
          <button className={tabStyles} onClick={close}>Fechar</button>
        </div>
      </div>
    </>
  )}
      </Popup>
    </div>
  );
}
