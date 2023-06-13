'use client';
import Link from "next/link";
import styles from './styles.module.scss';
import Image from 'next/image';
import Recipe from '../../img/receitas.jpeg';
import Burguer from '../../img/hamburgueria.jpeg';
import Nukenzie from '../../img/nukenzie.jpeg';
import { useState } from 'react';

export default function Projects(){
    const [slide, setSlide] = useState(3);
    
    function handleClickLeft() {
        if(slide==1){
            setSlide(3);
        }else{
            setSlide(slide-1);
        }
    }

    function goRecipe(){
        window.open("https://recipes-silk-eight.vercel.app/", "_blank");
    }
    function goNukenzie(){
        window.open("https://react-entrega-s1-template-nu-kenzie-odair-dev.vercel.app/", "_blank");
    }
    function goBurguer(){
        window.open("https://react-entrega-template-hamburgueria-da-kenzie-odair-dev.vercel.app/", "_blank");
    }

    return(
        <div className={styles.container} id='projects'>
            <h2>Últimos Projetos</h2>
            <div className={styles.subContainer}>
                <div className={styles.gallery} data-aos="fade-right" data-aos-duration="1500">
                    <Image src={Recipe} onClick={()=>goRecipe()}  alt="Site de Receitas"  className={slide==1 ? styles.item_1 : slide==2 ? styles.item_2 : slide==3 ? styles.item_3 : styles.none}/>
                    <Image src={Burguer} onClick={()=>goBurguer()} alt="Site Hamburgueria" className={slide==1 ? styles.item_2 : slide==2 ? styles.item_3 : slide==3 ? styles.item_1 : styles.none}/>
                    <Image src={Nukenzie} onClick={()=>goNukenzie()} alt="Site Nukenzie"     className={slide==1 ? styles.item_3 : slide==2 ? styles.item_1 : slide==3 ? styles.item_2 : styles.none}/>
                    
                </div>
                <div className={styles.controls}>
                        <button onClick={handleClickLeft}>Próximo</button>
                </div>
            </div>
        </div>
        // <>
        //     {/* <Link href={''}>Exemplo</Link> */}
        // </>
    )
}