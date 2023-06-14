import styles from './styles.module.scss';
import { Lato } from '@next/font/google';
import { Comforter_Brush } from '@next/font/google';

const lato = Lato({
    subsets: ['latin'],
    weight: ['400'],
    style: ['italic'], 
})

const comfort = Comforter_Brush({
    subsets: ['latin'],
    weight: ['400'], 
})

export default function Footer(){
    return(
        <div className={styles.container}>
            <div className={styles.maxSize}>
                <h3 className={lato.className}>Design & Desenvolvimento</h3>
                <h1 className={comfort.className}>Odair Sobrinho</h1>
            </div>
        </div>
    )
}