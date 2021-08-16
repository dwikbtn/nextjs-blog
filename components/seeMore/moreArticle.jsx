import React from "react";
import Image from "next/image";

import style from "./moreArticle.module.scss";

function MoreArticle({ morePages }) {
  const loadMore = morePages.slice(4).map((post) => (
    <div className={style["article"]} key={post._id}>
      <div className={style["image-container"]}>
        <Image src={post.imageURL} alt={post.title} width={250} height={165} />
      </div>
      <div className={style["article-text"]}>
        <div className={style["article-title"]}>
          <h1>{post.title}</h1>
        </div>
        <div className={style["article-content"]}>
          <p>{post.context.split(" ").slice(0, 30).join(" ") + " ..."}</p>
        </div>
        <div className={style["article-footer"]}>
          <div className={style.date}>{post.date}</div>
          <div className={style["read-more"]}>Read more</div>
        </div>
      </div>
    </div>
  ));
  return <div className="article-containers">{loadMore}</div>;
}

export default MoreArticle;
