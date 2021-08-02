import Image from "next/image";
import ig from "../../public/images/icons/instagram.svg";
import twt from "../../public/images/icons/twitter.svg";
import linkedin from "../../public/images/icons/linkedin.svg";
import style from "./social.module.scss";
export default function Social() {
  return (
    <div className={style.social}>
      <div style={{ marginRight: 10 + "px" }}>
        <a
          href="https://web.facebook.com/dwik.btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={ig} alt="instagram page" href="facebook.com" />
        </a>
      </div>
      <a
        href="https://twitter.com/DwiDwidp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div style={{ marginRight: 10 + "px" }}>
          <Image src={twt} alt="twitter page" />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/dwi-darma-putra-848036196/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div style={{ marginRight: 10 + "px" }}>
          <Image src={linkedin} alt="linkedin page" />
        </div>
      </a>
    </div>
  );
}
