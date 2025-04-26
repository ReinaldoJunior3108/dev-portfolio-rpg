import NLW from "../assets/img/nlw-unite.png"
import F1 from "../assets/img/f1.png"
import Project from "../components/Project"
export default function ProjectsGrid() {
    return(
        <div className="p-4 font-['JetBrains_mono']">
            <p className=" font-bold text-left text-2xl mt-[-20px]">Missões Concluídas</p> <br />
            <p className="text-sm text-left">Relatos das jornadas mais épicas, onde linhas de código se tornaram feitiços e interfaces, verdadeiras relíquias.</p>
            <br />
            <div className="grid lg:grid-cols-2 gap-4">
                <Project title="NLW - UNITE" innerdesc="Projeto desenvolvido na Semana NLW Unite da RocketSeat utilizando ReactJS, Node para Desenvolver um Sistema de Check-In" description="Projeto desenvolvido na Semana NLW Unite da RocketSeat utilizando ReactJS, Node para Desenvolver um Sistema de Check-In" image={NLW} category={["HTML", "CSS", "JavaScipt", "TypeScript", "React", "Node"]} git="https://github.com/ReinaldoJunior3108/programacao-internet/tree/main/2P%20-%201%C2%BA%20Bimestre/Trabalho%201%C2%BA%20Bimestre" deploy="https://programacao-internet.vercel.app/2P%20-%201%C2%BA%20Bimestre/Trabalho%201%C2%BA%20Bimestre/index.html"/>
                <Project title="Formula 1" description="Projeto desenvolvido em um trabalho acadêmico para classificação da Formula 1" innerdesc="Projeto desenvolvido em um trabalho acadêmico para classificação da Formula 1, foram utilizadas tabelas de classificação de Pilotos e Equipes, tanto por etapas quanto geral." image={F1} category={["HTML", "CSS", "JavaScipt"]} git="https://github.com/ReinaldoJunior3108/NLW-Unite" deploy="https://github.com/ReinaldoJunior3108/NLW-Unite"/>
            </div>
        </div>
    )
}