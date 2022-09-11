import Head from "next/head";

export default function Layout({ title, children, keywords, description }) {
  return (
    <div>
      <Head>
        <title>
          {title}
          <meta name="keywords" content={keywords}></meta>
          <meta name="description" content={description}></meta>
          <link rel="icon" href="/favion.ico"></link>
        </title>
      </Head>

      <main>{children}</main>
    </div>
  );
}

Layout.defaultProps = {
  title: "Ishaqs' Blog",
};
