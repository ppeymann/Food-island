import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/">Food-Island</Link>
        </div>
        <div className={styles.right}>
          <Link href="/menu">Menu</Link>
          <Link href="/categories">Categories</Link>
        </div>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        &copy; this site made By{" "}
        <a
          href="https://peyman-malek.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          PEYMAN MALEK
        </a>
      </footer>
    </>
  );
}

export default Layout;
