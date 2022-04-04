import Link from "next/Link";
import React from "react";
import styles from "./Header.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
const Header = () => {
  const { data: session, status } = useSession();
  const handleSignIn = (e) => {
    e.preventDefault();
    signIn("github");
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    signOut();
  };
  return (
    <div className={styles.header}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <ul className={styles.listmenu}>
        <li className={styles.listItem}>
          <Link href="/users">
            <a>Users</a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/prodducts">
            <a>Producrs</a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/news">
            <a>News</a>
          </Link>
        </li>
        {!session ? (
          <li className={styles.listItem}>
            <Link href="/api/auth/signin" onClick={handleSignIn}>
              <a>SignIn</a>
            </Link>
          </li>
        ) : (
          <li className={styles.listItem} onClick={handleSignOut}>
            <Link href="/news">
              <a>SignOut</a>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;
