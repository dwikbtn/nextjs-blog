import React from "react";
import Head from "next/head";
import Hero from "../components/hero/hero";
import Logo from "../components/Logo/Logo";
import News from "../components/news/News";
import SearchBar from "../components/searchBar/SearchBar";
import Social from "../components/socmedIcon/Social";
import Link from "next/link";

import style from "../styles/pages/index.module.scss";

import data from "../public/placeholder.json";
import Pagination from "../components/pagination/pagination";
import Footer from "../components/footer/footer";

export default function Home({ articleData }) {
  return (
    <>
      <Head>
        <title>Late Me | Dwi Personal Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <nav className={style.nav + " containers"}>
        <Logo />
        <SearchBar />
        <div className={style["nav-menu"]}>
          <Link href="/">Home</Link>
          <Link href="/#news">Articles</Link>
        </div>
        <Social />
      </nav>
      <section>
        <Hero />
        <article>
          <News allPosts={articleData} />
          <Pagination seeMore={articleData} />
        </article>
      </section>
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
