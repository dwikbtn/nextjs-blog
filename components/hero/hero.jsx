import style from "./hero.module.scss";
import Image from "next/image";
import heroImg from "../../public/images/hero.png";

export default function Hero() {
  return (
    <div className={style.hero}>
      <div className={style["hero-text"]}>
        <h1>Between Dreams</h1>
        <p>
          Blog post that i wrote before <br />
          diving into dream world
        </p>
      </div>
      <div className={style["hero-pic"]}>
        <Image alt="hero image" src={heroImg} />
      </div>
    </div>
  );
}
