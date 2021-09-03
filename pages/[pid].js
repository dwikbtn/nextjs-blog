import Wrapper from "../components/Wrapper";
import Head from "next/head";
import data from "../public/placeholder.json";
import Image from "next/image";

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

export default function Article({ news }) {
  return (
    <>
      <Head>
        <title>{news[0].title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Wrapper>
        <div>
          <Image
            src={news[0].imageURL}
            alt={news[0].title + " image heading"}
            width="500"
            height="500"
          />
        </div>
        <h1>{news[0].title}</h1>
        <p>{news[0].context}</p>
      </Wrapper>
    </>
  );
}
