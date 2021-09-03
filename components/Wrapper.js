import React from "react";
import Logo from "./Logo/Logo";
import SearchBar from "./searchBar/SearchBar";
import Link from "next/link";
import Social from "./socmedIcon/Social";
import Footer from "./footer/footer";
import style from "./wrapper.module.scss";

export default function Wrapper(props) {
  return (
    <>
      <nav className={style.nav + " containers"}>
        <Logo />
        <SearchBar />
        <div className={style["nav-menu"]}>
          <Link href="/">Home</Link>
          <Link href="/#news">Articles</Link>
        </div>
        <Social />
      </nav>
      {props.children}
      <footer>
        <Footer />
      </footer>
    </>
  );
}
