import style from "./hero.module.scss";
import Image from "next/image";
import heroImg from "../../public/images/hero.png";

export default function Hero() {
  return (
    <div className={style.hero}>
      <h1>between Dreams</h1>
      <p className={style["hero-text"]}>
        Blog post that i wrote before diving into dream world
      </p>
      <div className={style["hero-pic"]}>
        <Image alt="hero image" src={heroImg} />
      </div>
    </div>
  );
}
