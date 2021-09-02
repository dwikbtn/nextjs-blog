import Logo from "../components/Logo/Logo";
import SearchBar from "../components/searchBar/SearchBar";
import Social from "../components/socmedIcon/Social";
import Link from "next/link";
import hstyle from "../styles/pages/index.module.scss";
import data from "../public/placeholder.json";

export const getStaticPaths = async () => {
  // const res = await fetch()
  // const data = await res.json
  const paths = data.posts.map((post, i) => {
    return {
      params: { pid: post._id },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const id = params.pid;
  const posts = data.posts;
  //   const articleData = data.posts[id];
  const articleData = posts.filter((post) => {
    return post._id === id;
  });
  return {
    props: {
      news: articleData,
    },
  };
};
// const posts = data.posts;
// console.log(posts._id);
// const something = data.posts.map((post, i) => {
//   return {
//     paramsz: { id: post._id },
//   };
// });
export default function Article({ news }) {
  return (
    <div>
      {console.log(news[0].title)}
      <nav className={hstyle.nav + " containers"}>
        <Logo />
        <SearchBar />
        <div className={hstyle["nav-menu"]}>
          <Link href="/">Home</Link>
          <Link href="/#news">Articles</Link>
        </div>
        <Social />
      </nav>
      <p>test</p>
      <p>{news.title}</p>
    </div>
  );
}
