
type Props = {
  title: string;
  description: string;
  progressbar: number;
  xp: string;
  classe: string;
};

export default function Skills({ title, description, progressbar, xp, classe }: Props) {
  return (
    <div className="rpgui-container framed-golden p-4 w-full">
      <p className="text-xl font-bold">{title}</p>
      <hr className="golden" />
      <p className="text-left text-sm h-[110px]">{description}</p>
      <div className="rpgui-progress">
        <div className="rpgui-progress-right-edge"></div>
        <div className="rpgui-progress-track">
          <div
            className="rpgui-progress-fill blue"
            style={{ width: `${progressbar}%` }}
          ></div>
        </div>
        <div className="rpgui-progress-left-edge"></div>
      </div>
      <p className="text-left ">XP: {xp}/10000 | Classe: {classe}</p>
    </div>
  );
}
