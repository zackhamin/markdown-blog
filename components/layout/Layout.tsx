import Head from "next/head";
import { StyledContainer } from "./Layout.styles";

export default function Layout({ title, children, keywords, description }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords}></meta>
        <meta name="description" content={description}></meta>
        <link rel="icon" href="/favion.ico"></link>
      </Head>

      <StyledContainer>{children}</StyledContainer>
    </div>
  );
}

Layout.defaultProps = {
  title: "Ishaqs' Blog",
  keywords: "dev, website, blog, tech, code",
  description: "Ishaqs' website and blog ",
};
