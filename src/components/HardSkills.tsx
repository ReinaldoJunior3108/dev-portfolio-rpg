import Skills from "./Skills";

export default function HardSkills() {
    return (
        <div className="rpgui-container md:framed-grey grid md:grid-cols-2 gap-4">
        <Skills title="HTML" description="Domínio do arcano que molda a base de todo artefato digital. Capaz de invocar seções, títulos e invólucros com precisão milimétrica." progressbar={90} xp={"9000"} classe="Front-end" />
        <Skills title="CSS" description="Arte de estilizar dimensões, cores e formas. Seus feitiços transformam páginas comuns em verdadeiras obras encantadas." progressbar={80} xp={"8000"} classe="Front-end" />
        <Skills title="JavaScript" description="Magia viva que concede movimento e inteligência às interfaces. Manipula o DOM como um mago controla os elementos." progressbar={50} xp={"5000"} classe="Magia" />
        <Skills title="TypeScript" description="Variante ancestral do JavaScript, protegida por runas que evitam maldições (erros) e fortalecem o código com previsões precisas." progressbar={50} xp={"5000"} classe="Magia Anti-Bugs" />
        <Skills title="ReactJS" description="Tecnologia de invocação avançada. Permite a criação de criaturas/componentes reutilizáveis para batalhas longas no front-end." progressbar={60} xp={"6000"} classe="Front-end" />
        <Skills title="Responsividade" description="Feitiço que adapta magias para qualquer tela, seja espelho de bolso ou orbe gigante (mobile a desktop)." progressbar={70} xp={"7000"} classe="Front-end" />
        <Skills title="Git" description="Controle absoluto sobre as linhas do destino do código. Volta no tempo, ramifica realidades e funde dimensões (branches)." progressbar={40} xp={"4000"} classe="Front-end" />
        <Skills title="TailwindCSS" description="Comandos curtos e rúnicos que invocam visuais complexos. Otimizado para conjuradores ágeis.." progressbar={70} xp={"7000"} classe="Front-end" />
        <Skills title="BootStrap" description="Um tomo antigo com magias prontas para uso rápido. Ideal para aventuras urgentes ou protótipos místicos." progressbar={50} xp={"5000"} classe="Front-end" />
        <Skills title="Manutenção de Hardware" description="Dom da cura e fortalecimento de máquinas encantadas. Reinaldo manipula circuitos como se fossem nervos de dragões metálicos." progressbar={90} xp={"9000"} classe="Healer" />
        </div>
    )
}