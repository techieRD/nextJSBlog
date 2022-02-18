
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layouts';

const index =() => {

  return (
    <div>
      <Head>
        <title>Angie's NextJS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <h1>Hi. I'm Angi. Welcome to my blog.</h1>
    <p>I am learning how to deploy a Next.js app to AWS. I don't know what the heck I'm doing. Fun times.</p>
    <Layout />
    <h2>
        <Link href="/posts/first-post">
          <a>First Post</a>
        </Link>
      </h2>
    </div>
  )   
}
export default index;