import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";

import { client } from "../../lib/prismic-configuration";

import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Blog | Gustavo Scafeli</title>
        <meta name="og:title" property="og:title" content="Blog" />
        <meta
          name="description"
          content="Conteúdos de qualidade sobre programação e negócios."
        />
      </Head>

      <main>
        <Header />

        <div class="text-center content-center my-8">
          <h1 class="text-5xl font-bold mb-3">Gustavo Scafeli</h1>
          <p class="text-2xl font-semibold">Blog</p>
        </div>

        <div className="max-w-screen-md mx-auto">
          {posts.results.map((post) => (
            <Link href="/blog/[uid]" as={`/blog/${post.uid}`} key={post.uid}>
              <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
                <img
                  class="w-auto h-40 md:rounded-none rounded-full"
                  src={post.data.featured_img.url}
                  alt=""
                />
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                    <p class="text-lg font-semibold">
                      {RichText.render(post.data.title)}
                    </p>
                  </blockquote>
                </div>
              </figure>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const mapNumberToMonth = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const home = await client.getSingle("blog_post", {
    orderings: "[my.post.date desc]",
  });

  const posts = await client.query(
    Prismic.Predicates.at("document.type", "blog_post"),
    { orderings: "[my.post.date desc]" }
  );

  posts.results.map((post) => {
    const dateArray = post.data.date.split("-");
    post.data.formattedDate = `${dateArray[2]} de ${
      mapNumberToMonth[dateArray[1] - 1]
    } de ${dateArray[0]}`;

    // const post = post.results;
    // const image = post.illustration;
    // const featured_img = image.url;
  });

  return {
    props: {
      posts,
      // home,
    },
  };
};
