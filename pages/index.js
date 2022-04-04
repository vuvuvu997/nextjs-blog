import Head from 'next/head'
import Link from "next/Link";
import { useSession } from "next-auth/react";
export default function Home() {
  const { data: session, status } = useSession();
  console.log(session, status);
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Home page</h1>
      <div>{session && <h2>Welcome {session.user.name}</h2>}</div>
    </div>
  );
}
