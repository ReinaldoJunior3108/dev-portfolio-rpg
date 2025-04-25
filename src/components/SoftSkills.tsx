import Skills from "./Skills";
export default function SoftSkills() {
    return (
        <div className="rpgui-container md:framed-grey grid md:grid-cols-2 gap-4">
        <Skills title="Criatividade" description="A centelha da inovação — sua mente é um grimório de ideias fora do comum, capaz de encantar até os problemas mais complexos." progressbar={60} xp={"6000"} classe="Pensador" />
        <Skills title="Resiliência" description="Forjado em batalhas intensas, este atributo representa sua capacidade de se levantar após cada queda com mais força e sabedoria." progressbar={80} xp={"8000"} classe="Tank" />
        <Skills title="Adaptabilidade" description="Como um camaleão místico, você se ajusta a novos ambientes, desafios e equipes com a leveza de quem domina muitas formas." progressbar={80} xp={"8000"} classe="Metamorfo" />
        <Skills title="Trabalho em Equipe" description="Habilidade em constante evolução... Os dados do reino ainda estão sendo coletados. Missões futuras revelarão seu verdadeiro potencial." progressbar={0} xp={"???"} classe="Desconhecido" />
        <Skills title="Pensamento Crítico" description="Como um sábio estrategista, enxerga além das ilusões, analisando cada variável antes de agir. Uma mente afiada como uma adaga élfica." progressbar={85} xp={"8500"} classe="Critico" />
        <Skills title="Organização" description="Mantém seus artefatos e pergaminhos em ordem. Ainda em evolução, mas demonstra disciplina suficiente para não ser surpreendido pelo caos." progressbar={70} xp={"7000"} classe="Anti-Caos" />
        </div>
    )
}