import React, { useState } from "react";
import style from "./news.module.scss";

function News(props) {
  console.log(props.allPosts);

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
      <div className={"grid-bg " + style["news-latest"]}>{article}</div>
      <div className={style["news-panel"]}>Test</div>
      <div className={style["news-panel"]}>Test</div>
      <div className={style["news-panel"]}>Test</div>
      <div className={"grid-bg " + style["news-latest"]}>Test</div>
    </article>
  );
}

export default News;
