import styles from './styles.module.scss';
import LogoTS from '@/img/typescript.svg';
import LogoReact from '@/img/react-2.svg';
import LogoJS from '@/img/logo-javascript.svg';
import LogoCSS from '@/img/css-3.svg';
import LogoHTML from '@/img/html-1.svg';
import NextJS from '@/img/nextjs-13.svg';
import Image from 'next/image';

export default function Technologies(){
    return(
        <div className={styles.container} id='techs'>
            <div className={styles.title}>
                <h2>Tecnologias</h2>
            </div>
            <div className={styles.card} data-aos="fade-up" data-aos-duration="1500">
                <p>HTML</p>
                <Image src={LogoHTML} alt="Logotipo HTML" />
            </div>
            <div className={styles.card} data-aos="fade-up" data-aos-duration="1500">
                <p>CSS</p>
                <Image src={LogoCSS} alt="Logotipo CSS" />
            </div>
            <div className={styles.card} data-aos="fade-up" data-aos-duration="1500">
                <p>JavaScript</p>
                <Image src={LogoJS} alt="Logotipo JavaScript" />
            </div>
            <div className={styles.card} data-aos="fade-up" data-aos-duration="1500">
                <p>React</p>
                <Image src={LogoReact} alt="Logotipo React" />
            </div>
            <div className={styles.card} data-aos="fade-up" data-aos-duration="1500">
                <p>TypeScript</p>
                <Image src={LogoTS} alt="Logotipo TypeScript" />
            </div>
            <div className={styles.card} data-aos="fade-up" data-aos-duration="1500">
                <p>Next.JS</p>
                <Image src={NextJS} alt="Logotipo Next" />
            </div>
        </div>
    )
}