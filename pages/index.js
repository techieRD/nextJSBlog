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
    <p>I am learning how to deploy a Next.js app to AWS. I don't know what the heck I'm doing. Fun times. I started building this app 1 week ago. The past 2 days have been frustrating, because I cannot figure out how to commit changes to Github in VS Code. 
      
       </p>

       <p>Grrrrrr!!</p>
       <p>Not sure what is happening. It is the 17th of February 2022 on Friday eve, and I sit here after a stressful workday, yelling at my computer for not pushing my code. </p>
         
      <p>What am I doing wrong? Of course none of the YouTube videos cover any of these issues that you may encounter ... tap, tap, tap ... I keep trying ...</p>
        
      <p>Still at it. What is going on? Someone please help. This is crazy. </p>
      <p>I have added more changes.  Now I am having issues with the build failing in AWS. Not sure what the problem is.</p>

      <p>Hallelujah!! I finally got it. It is now 9:30 pm. Success at last. My app is now live. Do you see me doing the happy dance?  HaHa!! I don't know how to add a dancing gif, so for now you will just have to imagine it. Now I can finally go eat and give my brain a break.</p>

      <p>It is Saturday 19th of February and I want to code. But first I have to go train at the gym.</p>
    <Layout />
    <h2>
        <Link href="/posts/first-post">
          <a>First Post</a>
        </Link>
      </h2>
    </div>
  );   
};
export default index;