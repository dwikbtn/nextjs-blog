import Head from "next/head";
import Hero from "../components/hero/hero";
import Logo from "../components/Logo/Logo";
import News from "../components/news/News";
import SearchBar from "../components/searchBar/SearchBar";
import Social from "../components/socmedIcon/Social";

import style from "../styles/pages/index.module.scss";

import data from "../public/placeholder.json";
import Footer from "../components/footer/footer";

export async function getStaticProps() {
  const allPostsData = data.posts.map((element) => {
    return element;
  });
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Late Me | blog</title>
        <meta name="Late Me" content="Dwi Darma Blog's" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={style.nav + " containers"}>
        <Logo />
        <SearchBar />
        <div className={style["nav-menu"]}>
          <p>Home</p>
          <p>articles</p>
        </div>
        <Social />
      </nav>
      <content>
        <article>
          <Hero />
        </article>
        <News allPosts={allPostsData} />
      </content>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
