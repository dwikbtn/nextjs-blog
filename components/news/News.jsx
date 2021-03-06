import React, { useState } from "react";
import style from "./news.module.scss";
import Image from "next/image";
import Link from "next/link";

function News({ allPosts }) {
  allPosts[0].context.split(" ").slice(0, 30).join(" ") + " ...";
  const articleLatest = (
    <div className="card">
      <div className={style["article-latest"]}>
        <div className={style["article-text"]}>
          <div className={style["article-title"]}>
            <h1>
              <Link href={`/${allPosts[0]._id}`}>{allPosts[0].title}</Link>
            </h1>
          </div>
          <div className={style["article-content"]}>
            <p>
              <Link href={`/${allPosts[0]._id}`}>
                {allPosts[0].context.split(" ").slice(0, 30).join(" ") + " ..."}
              </Link>
            </p>
          </div>
          <div className={style["article-footer"]}>
            <div className={style.date}>{allPosts[0].date}</div>
            <div className={style["read-more"]}>
              <Link href={`/${allPosts[0]._id}`}>Read more</Link>
            </div>
          </div>
        </div>
        <div className={style["image-container-latest"]}>
          <Image
            src={allPosts[0].imageURL}
            alt={allPosts[0].title}
            width={500}
            height={245}
          />
        </div>
      </div>
    </div>
  );

  //get the other post than latest
  const posts = allPosts.slice(1, 4).map((post) => (
    <div className={style["news-panel"]} key={post._id}>
      <div className="card">
        <div className={style["article-others"]}>
          <div className={style["image-container-latest"]}>
            <Image
              src={post.imageURL}
              alt={post.title}
              width={500}
              height={245}
            />
          </div>
          <div className={style["article-text"]}>
            <div className={style["article-title"]}>
              <h1>
                <Link href={`/${post._id}`}>{post.title}</Link>
              </h1>
            </div>
            <div className={style["article-content"]}>
              <p>
                <Link href={`/${post._id}`}>
                  {post.context.split(" ").slice(0, 30).join(" ") + " ..."}
                </Link>
              </p>
            </div>
            <div className={style["article-footer"]}>
              <div className={style.date}>{post.date}</div>
              <div className={style["read-more"]}>
                <Link href={`/${post._id}`}>Read more </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  // filter to get the highlighted post
  const filteredHighlight = allPosts.filter((post) => post.highlight === true);
  const highlightedPost = (
    <div className="card">
      <div className={style["article-highlight"]}>
        <div className={style["article-text"]}>
          <div className={style["article-title"]}>
            <h1>
              <Link href={`/${filteredHighlight[0]._id}`}>
                {filteredHighlight[0].title}
              </Link>
            </h1>
          </div>
          <div className={style["article-content"]}>
            <p>
              <Link href={`/${filteredHighlight[0]._id}`}>
                {filteredHighlight[0].context
                  .split(" ")
                  .slice(0, 50)
                  .join(" ") + " ..."}
              </Link>
            </p>
          </div>
          <div className={style["article-footer"]}>
            <div className={style.date}>{filteredHighlight[0].date}</div>
            <div className={style["read-more"]}>
              <Link href={`/${filteredHighlight[0]._id}`}>Read more</Link>
            </div>
          </div>
        </div>
        <div className={style["image-container-highlight"]}>
          <Image
            src={filteredHighlight[0].imageURL}
            alt={filteredHighlight[0].title}
            width={500}
            height={439}
          />
        </div>
      </div>
    </div>
  );
  return (
    <article id="news" className={"containers grid-container " + style.news}>
      <div className={"grid-bg " + style["news-latest"]}>{articleLatest}</div>
      {posts}
      <div className={"grid-bg " + style["news-highlight"]}>
        {highlightedPost}
      </div>
    </article>
  );
}

export default News;
