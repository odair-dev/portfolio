import styles from "./styles.module.scss";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300"],
  style: ["italic"],
});

export default function About() {
  return (
    <div className={styles.container} id="about">
      <div
        className={styles.textContainer}
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <article className={lato.className}>
          Gosto de desenvolver soluções responsivas, acessíveis e tecnológicas
          que aliam beleza e funcionalidade, além de claro que causem uma
          excelente experiência do usuário. Acho importante estar sempre
          atualizado com as novas tecnologias para poder criar produtos que
          atendem as expectativas dos clientes como, por exemplo, SEO (Search
          Engine Otimization). De maneira breve, estar atento a isso fará com
          que seu site seja melhor ranqueado pelos motores de buscas e com isso
          aparecer primeiro nas pesquisas da internet.
        </article>
        <p className={lato.className}>Odair Rodrigues da Silva Sobrinho</p>
        {/* <a className={lato.className} href="https://drive.google.com/file/d/1ofjvZLSOZwDePmFnh3jRCBnxzGcPn3Px/view?usp=sharing" target="blank">Link Pitch Pessoal</a> */}
      </div>
    </div>
  );
}
