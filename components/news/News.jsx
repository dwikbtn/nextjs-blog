import React, { useState } from "react";
import style from "./news.module.scss";
import Image from "next/image";

function News({ allPosts }) {
  const clamped =
    allPosts[0].context.split(" ").slice(0, 30).join(" ") + " ...";
  console.log(clamped);
  const articleLatest = (
    <div className={style["article-latest"]}>
      <div className={style["article-text"]}>
        <div className={style["article-title"]}>
          <h1>{allPosts[0].title}</h1>
        </div>
        <div className={style["article-content"]}>
          <p>{clamped}</p>
        </div>
        <div className={style["article-footer"]}>
          <div className={style.date}>{allPosts[0].date}</div>
          <div className={style["read-more"]}>Read more</div>
        </div>
      </div>
      <div className={style["image-container-latest"]}>
        <Image
          src={allPosts[0].imageURL}
          alt={allPosts[0].title}
          width={435}
          height={245}
        />
      </div>
    </div>
  );

  const article = (
    <div className="article">
      <div className="article-title">long established</div>
      <div className="article-content">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that....
      </div>
      <div className="article-footer">
        <div className="date">11/11/11</div>
        <div className="read-more">Read more</div>
      </div>
    </div>
  );
  return (
    <article className={"containers grid-container " + style.news}>
      <div className={"grid-bg " + style["news-latest"]}>{articleLatest}</div>
      <div className={style["news-panel"]}>Test</div>
      <div className={style["news-panel"]}>Test</div>
      <div className={style["news-panel"]}>Test</div>
      <div className={"grid-bg " + style["news-latest"]}>Test</div>
    </article>
  );
}

export default News;
