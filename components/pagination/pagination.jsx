import React from "react";
import style from "./page.module.scss";
import downArrow from "../../public/images/icons/see-more.svg";
import Image from "next/image";

export default function Pagination() {
  return (
    <div className={"containers button " + style["see-more-btn"]}>
      <a href="#" className={style["see-more"]}>
        <p>See More</p>
        <Image src={downArrow} alt="see more" />
      </a>
    </div>
  );
}
