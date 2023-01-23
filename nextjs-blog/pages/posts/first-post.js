import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

function FirstPost() {
  const YourComponent = () => (
    <Image
      src="/images/profile.jpg"
      height={144}
      width={144}
      alt="Your Name"
    />
  );

  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)}
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
        <YourComponent />
      </h2>
    </>
  );
}

export default FirstPost;
