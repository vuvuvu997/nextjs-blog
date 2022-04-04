import Head from "next/head";
import Link from "next/Link";
import { useState, useEffect } from "react";
import { getSession, signIn } from "next-auth/react";
export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSecurity = async () => {
      const session = await getSession();
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    };
    return getSecurity();
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container">
      <h1>Dashboard</h1>
    </div>
  );
}
