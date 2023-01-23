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
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
        <YourComponent />
      </h2>
    </>
  );
}

export default FirstPost;
