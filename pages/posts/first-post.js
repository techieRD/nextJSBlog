import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/Layouts'


export default function FirstPost() {
  return (
    <>
    <Head>
      <title>Post 1</title>
    </Head>
      <h1>First Post</h1>
      <Layout />
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}