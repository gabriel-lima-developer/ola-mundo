import PostModel from 'components/PostModel';
import styles from './AboutMe.module.css';
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobre_mim_foto.png"

export default function AboutMe() {
    return (
        <PostModel
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Gabriel!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Gabriel Lima com sua esposa e filho"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Sou Analista de Sistemas e desenvolvedor apaixonado por tecnologia, com mais de 7 anos de experiência na área. Ao longo desse tempo, tive a oportunidade de trabalhar em diferentes projetos, principalmente em sistemas web. Minha base técnica é formada em C#, ASP.NET (Web Forms e MVC), SQL Server e MongoDB, além de integrações por API REST. Hoje continuo sempre em aprendizado, explorando o .NET 8 e buscando novas formas de aplicar boas práticas no desenvolvimento.
            </p>

            <p className={styles.paragrafo}>
                Também estou expandindo meus horizontes no front-end, aprendendo React. Comecei estudando com JavaScript, depois sigo para TypeScript e, mais adiante, quero mergulhar no React Native para explorar o desenvolvimento mobile. Essa jornada tem sido desafiadora, mas ao mesmo tempo muito empolgante, pois abre novas possibilidades de criação e inovação.
            </p>

            <p className={styles.paragrafo}>
                Mas minha vida não é feita só de código. Fora do computador, sou casado com a Milena, minha companheira de vida e de sonhos, e pai do Emanuel, que enche meus dias de alegria e motivação. Eles são minha maior inspiração, o que me move a querer crescer profissionalmente e também como pessoa. A cada novo projeto, penso em como posso evoluir para oferecer um futuro ainda melhor para a minha família.
            </p>
            
            <p className={styles.paragrafo}>
                Acredito que desenvolvimento vai muito além da parte técnica: é sobre transformar ideias em soluções que simplifiquem processos e facilitem a vida das pessoas. Para mim, cada linha de código é uma oportunidade de aprender, contribuir e deixar um impacto positivo.
            </p>

            <p className={styles.paragrafo}>
                Espero que, ao conhecer meu trabalho, você perceba esse cuidado em cada detalhe.
            </p>

        </PostModel>
    )
}