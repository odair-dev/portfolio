import styles from './styles.module.scss';
import Odair from '../../img/odair.png';
//import Logo from '../../img/logo.png';
import Image from 'next/image';

export default function Description(){
    return(
        <div className={styles.container}>
            <div className={styles.maxSize}>
                <div className={styles.divImg} data-aos="zoom-in" data-aos-duration="1500">
                    <Image src={Odair} alt="Foto Odair" />
                </div>
                <div className={styles.divDescription}>
                    <div className={styles.title} data-aos="fade-left" data-aos-duration="1500">
                        <h1>Desenvolvedor <span>Front End</span></h1>
                        <div className={styles.level}>
                            <p>JUNIOR</p>
                        </div>
                        <article>
                            Certificado pela Kenzie Academy Brasil
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}