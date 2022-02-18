
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
    <p>I am learning how to deploy a Next.js app to AWS. I don't know what the heck I'm doing. Fun times. I started building this app 1 week ago. The past 2 days have been frustrating, because I can figure out how I commit changes to Github in VSC. Grrrrrr!!</p>
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