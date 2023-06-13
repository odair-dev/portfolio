import styles from './styles.module.scss';

export default function Footer(){
    return(
        <div className={styles.container}>
            <div className={styles.maxSize}>
                <h3>Design & Desenvolvimento</h3>
                <h2>Odair Sobrinho</h2>
            </div>
        </div>
    )
}