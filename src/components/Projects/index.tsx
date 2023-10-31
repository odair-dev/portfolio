"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import DeSa from "../../img/img-api-de-sa.png";
import Motors from "../../img/motors-shop.png";
import Burguer from "../../img/hamburgueria.jpeg";
import Nukenzie from "../../img/nukenzie.jpeg";
import { useState } from "react";

export default function Projects() {
  const [slide, setSlide] = useState(3);

  function handleClickLeft() {
    if (slide == 1) {
      setSlide(3);
    } else {
      setSlide(slide - 1);
    }
  }

  function goAPI() {
    window.open("https://odair-dev-m6-t16.onrender.com/api", "_blank");
  }
  function goNukenzie() {
    window.open(
      "https://react-entrega-s1-template-nu-kenzie-odair-dev.vercel.app/",
      "_blank"
    );
  }
  function goBurguer() {
    window.open("https://burguer-five.vercel.app/", "_blank");
  }

  return (
    <div className={styles.container} id="projects">
      <h2>Últimos Projetos</h2>
      <div className={styles.subContainer}>
        <div
          className={styles.gallery}
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <Image
            src={Motors}
            onClick={() => goAPI()}
            alt="APP Motors"
            className={
              slide == 1
                ? styles.item_1
                : slide == 2
                ? styles.item_2
                : slide == 3
                ? styles.item_3
                : styles.none
            }
          />
          <div className={styles.divLinks}>
            <a
              target="_blank"
              href={
                slide == 1
                  ? "https://github.com/odair-dev/burguer"
                  : slide == 2
                  ? "https://github.com/Kenzie-Academy-Brasil-Developers/m6-t16_odair-dev"
                  : slide == 3
                  ? "https://github.com/odair-dev/nukenzie"
                  : styles.none
              }
            >
              Github
            </a>
            <a
              target="_blank"
              href={
                slide == 1
                  ? "https://burguer-five.vercel.app/"
                  : slide == 2
                  ? "https://odair-dev-m6-t16.onrender.com/api"
                  : slide == 3
                  ? "https://react-entrega-s1-template-nu-kenzie-odair-dev.vercel.app/"
                  : styles.none
              }
            >
              Deploy
            </a>
          </div>
          <Image
            src={Burguer}
            onClick={() => goBurguer()}
            alt="Site Hamburgueria"
            className={
              slide == 1
                ? styles.item_2
                : slide == 2
                ? styles.item_3
                : slide == 3
                ? styles.item_1
                : styles.none
            }
          />
          <Image
            src={Nukenzie}
            onClick={() => goNukenzie()}
            alt="Site Nukenzie"
            className={
              slide == 1
                ? styles.item_3
                : slide == 2
                ? styles.item_1
                : slide == 3
                ? styles.item_2
                : styles.none
            }
          />
        </div>
        <div className={styles.controls}>
          <button onClick={handleClickLeft}>Próximo</button>
        </div>
      </div>
    </div>
  );
}
