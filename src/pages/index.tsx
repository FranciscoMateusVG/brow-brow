import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.user.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <Link href="/api/auth/login">Login</Link>
        <Link href="/api/auth/logout">LogOut</Link>
      </main>
    </>
  );
};

export default Home;
