import React from "react";
import Head from "next/head";
import Hero from "../components/hero/hero";
import News from "../components/news/News";

import data from "../public/placeholder.json";
import Pagination from "../components/pagination/pagination";
import Footer from "../components/footer/footer";
import Wrapper from "../components/Wrapper";

export default function Home({ articleData }) {
  return (
    <>
      <Head>
        <title>Late Me | Dwi Personal Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Wrapper>
        <section>
          <Hero />
          <article>
            <News allPosts={articleData} />
            <Pagination seeMore={articleData} />
          </article>
        </section>
      </Wrapper>
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
