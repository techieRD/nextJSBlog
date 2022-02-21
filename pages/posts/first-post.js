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
      <p>My career has taken a detour. 2018 I was working as an instructional designer for a big company, doing what I didn't enjoy. This was not a dream job. I don't honestly know what my dream job is. I just let life take me where it will take me. So in 2018, one day a recruiter calls me and asks if I would be interested in an opportunity he had open. It was early am, I was on my way to work and had an hour commute ahead of me.  Just to get him off the phone I told him I would send him my resume later.</p>

      <p>He called me several times that day asking for my resume, then in one message he asked if I would give my consent to be submitted to the position. I never replied. That night I checked my email and he had setup an interview for that Friday with an internal recruiter for the company.</p>

      <p>I figured, what the heck, why not. Let's just talk to the recruiter.  I wasn't happy at my current job anyways. It would be nice to go somewhere else.  Plus it was a 5 min commute if I took the job. I was tired of driving one hour to work everyday. Well in the end, it turned out to be the best thing that happened to me careerwise. This position moved me into the direction I had layed out for myself to evenually develop applications. </p>
      <Layout />
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}