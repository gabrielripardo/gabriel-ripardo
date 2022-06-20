import Layout from "../../components/Layout"
import SEO from "../../components/SEO"

export default function About() {
    return (
        <Layout>            
            <SEO title="About me" />
            <article className="p-14 font-large">
                <h1>Sobre mim</h1>
                <p>&quot;Desde cedo se aventurando com os computers né&quot;. Assim dizia meu tio, o principal responsável pela minha entrada nesse mundo da tecnologia. </p>
                <p>Olá, leitor como você já sabe meu nome é Gabriel Ripardo, sou desenvolvedor há 4 anos, mas antes disso me aventurei em muitas áreas da tecnologia, então
                    minha história no mundo da T.I não se resume nesses quatro anos, conheci a área de Redes quando fazia remendos nos fios azuis de internet, configurando
                    roteador, hackeando senhas de wifi (só por aventura, nada criminoso). Também conheci a área de manutenção de computadores, montando, formatando, configurando notebooks e PC&apos;s.
                </p>
                <p>Enfim, passei por muitas áreas desde cedo, então é uma paixão que vem desde criança, pintando no Paint do Windows 98 e jogando Pinball no Windows Xp. Sim,
                    eu sei que sou velho. Algo curioso é que de todas essas áreas a área que eu achava muito difícil era o desenvolvimento, o material era escaço e existia poucos programadores
                    que ensinavam de forma simples. No entanto, com 13 anos eu fiz uma promessa pra mim mesmo de que eu me tornaria um engenheiro de software.
                </p>
                <p>
                    Hoje o meu trabalho é desenvolver e realizar manutenção no front-end em sites e sitemas e pretendo passar através desse pequeno blog meu conhecimento na área de dev de forma leve e simples.
                </p>
            </article>
        </Layout>
    )
}