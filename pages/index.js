import React from "react";
import Head from "next/head";
import Hero from "../components/hero/hero";
import Logo from "../components/Logo/Logo";
import News from "../components/news/News";
import SearchBar from "../components/searchBar/SearchBar";
import Social from "../components/socmedIcon/Social";

import style from "../styles/pages/index.module.scss";

import data from "../public/placeholder.json";
import Pagination from "../components/pagination/pagination";
import Footer from "../components/footer/footer";

export default function Home({ articleData }) {
  return (
    <>
      <Head>
        <title>Late Me | Dwi Personal Blog</title>
        <meta name="personal Blog" content="blog contains tech and stuffs" />
      </Head>
      <nav className={style.nav + " containers"}>
        <Logo />
        <SearchBar />
        <div className={style["nav-menu"]}>
          <p>Home</p>
          <p>Articles</p>
        </div>
        <Social />
      </nav>
      <content>
        <Hero />
        <article>
          <News allPosts={articleData} />
          <Pagination seeMore={articleData} />
        </article>
      </content>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export async function getStaticProps() {
  const articleData = data.posts.map((element) => {
    return element;
  });

  // let otherPosts = null;

  // const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  // const otherPosts = await res.json();

  return {
    props: {
      articleData,
    },
  };
}
