export default function About() {
  return (
    <div className="font-['JetBrains_mono'] p-4 text-left text-sm">
      <p className="text-2xl font-bold text-left"> 🧙 Sobre o Projeto</p>
      <br />
      <hr className="golden" />
      <br />
      <p>
        Este projeto foi desenvolvido com o objetivo de unir tecnologia e
        criatividade em uma experiência visual única, inspirada em elementos de
        jogos clássicos de RPG. Foi criado do zero, utilizando como base a
        biblioteca <a href="https://ronenness.github.io/RPGUI/">RPGUI</a>, que
        foi fundamental para trazer esse estilo retrô e nostálgico à interface.
        Além do estilo visual, o foco também foi explorar conceitos modernos de
        desenvolvimento front-end, como: <br />
        <ul className="list-disc list-inside">
          <li>
            <strong>ReactJS </strong>para estrutura e lógica dos componentes
          </li>
          <li>
            <strong>TailwindCSS</strong> para estilização responsiva e flexível
          </li>
          <li>
            <strong>Typescript</strong> para maior segurança e organização do
            código
          </li>
          <li>
            E claro, boas práticas com separação de componentes e responsividade
            mobile.
          </li>
        </ul>
      </p>
      <br />
      <br />
      <p className="text-2xl text-left font-bold">🎯 Objetivo</p>
      <br />
      <p>
        O objetivo principal foi criar um portfólio interativo e divertido, que
        refletisse minha personalidade e habilidades técnicas, ao mesmo tempo em
        que proporcionasse uma experiência diferente e memorável para quem
        acessa.
      </p>
      <br />
      <br />
      <p className="text-2xl font-bold text-left">🎨 Créditos</p>
      <br />
      <p>
        O design deste projeto foi inspirado em uma criação original de Heric
        Mendes, que serviu como grande referência visual. <br /> Apesar disso, todo o
        desenvolvimento foi feito do zero, desde a estrutura até os componentes,
        adaptando as ideias do design original para um projeto próprio,
        funcional e responsivo. <br /> Essa jornada foi uma oportunidade incrível de
        aprendizado e evolução como desenvolvedor, tanto na parte visual quanto
        na organização do código e construção de uma aplicação real com
        múltiplas funcionalidades.
      </p>
    </div>
  );
}
