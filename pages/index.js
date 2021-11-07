import Link from "next/link";
import Navbar from "../components/NavBar";
import Head from "next/head";

function HomePage() {
  return (
    <>
      <Head>
        <title>My blog</title>
        <meta name="description" value="welcome to my blog" />
      </Head>
      <main>
        <h1>My Blog</h1>
      </main>
    </>
  );
}

export default HomePage;
