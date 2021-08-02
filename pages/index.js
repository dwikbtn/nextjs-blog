import Head from "next/head";
import Hero from "../components/hero/hero";
import Logo from "../components/Logo/Logo";
import SearchBar from "../components/searchBar/SearchBar";
import Social from "../components/socmedIcon/Social";

import style from "../styles/pages/index.module.scss";

export default function Home() {
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
      </content>
    </>
  );
}
