import React, { useState } from "react";
import style from "./page.module.scss";
import downArrow from "../../public/images/icons/see-more.svg";
import Image from "next/image";
import MoreArticle from "../seeMore/moreArticle";

export default function Pagination({ seeMore }) {
  const [articleLoad, setArticleLoad] = useState(false);
  const onClickHandler = (e) => {
    e.preventDefault();
    setArticleLoad(true);
  };
  return (
    <>
      <div className={"containers button " + style["see-more-btn"]}>
        <a href="#" className={style["see-more"]} onClick={onClickHandler}>
          <p>See More</p>
          <Image src={downArrow} alt="see more" />
        </a>
      </div>
      <div>{articleLoad && <MoreArticle morePages={seeMore} />}</div>
    </>
  );
}
