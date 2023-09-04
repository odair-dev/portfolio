import styles from './styles.module.scss';
import Sandwich from "../Sandwich";
import { useContext } from "react";
import { GlobalContext } from "@/providers/GlobalContext";
import { Comforter_Brush } from '@next/font/google';

const comfort = Comforter_Brush({
    subsets: ['latin'],
    weight: ['400'], 
})

export default function Header(){
    const { modalMobile, setModalMobile } = useContext(GlobalContext);
    return(
        <div className={!modalMobile ? styles.container : styles.modal}>
            <div className={styles.maxSize}>
                <div className={styles.divName}>
                    <p className={comfort.className}>Odair Sobrinho</p>
                </div>
                <Sandwich />
                <div className={modalMobile ? styles.divModal : styles.modalNone}>
                    <ul>
                        <li>
                            <a href="https://drive.google.com/file/d/1usdWxJLHmft-3xOARw9v7gkkt3tfA3y7/view?usp=sharing" target="blank">Currículo</a>
                        </li>
                        <li>
                            <a href="https://github.com/odair-dev" target="blank">Github</a>   
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/odair-sobrinho/" target="blank">Linkedin</a>
                        </li>
                        <li>
                            <a href="https://drive.google.com/file/d/1ofjvZLSOZwDePmFnh3jRCBnxzGcPn3Px/view?usp=sharing" target="blank">Pitch Pessoal</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.divMenu}>
                    <div className={styles.divFocus}>
                        <a href="#home">Home</a>
                        <div className={styles.divBars}></div>
                    </div>
                    <div className={styles.divFocus}>
                        <a href="#about">Sobre</a>
                        <div className={styles.divBars}></div>
                    </div>
                    <div className={styles.divFocus}>
                        <a href="#techs">Skills</a>
                        <div className={styles.divBars}></div>
                    </div>
                    <div className={styles.divFocus}>
                        <a href="#projects">Projetos</a>
                        <div className={styles.divBars}></div>
                    </div>
                    <div className={styles.divFocus}>
                        <a href="https://drive.google.com/file/d/1usdWxJLHmft-3xOARw9v7gkkt3tfA3y7/view?usp=sharing" target="blank">Currículo</a>
                        <div className={styles.divBars}></div>
                    </div>
                    <div className={styles.divFocus}>
                        <a href="https://github.com/odair-dev" target="blank">Github</a>
                        <div className={styles.divBars}></div>
                    </div>
                    <a className={styles.btnLinkedin} href="https://www.linkedin.com/in/odair-sobrinho/" target="blank">Linkedin</a>
                </div>
            </div>
        </div>
    )
}