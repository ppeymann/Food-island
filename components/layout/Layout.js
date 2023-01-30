import Link from "next/link";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/">Food</Link>
        </div>
        <div className={styles.right}>
          <Link href="/menu">Menu</Link>
          <Link href="/category">Category</Link>
        </div>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        &copy;this site made By{" "}
        <Link href="https://peyman-malek.netlify.app" target="_blank">
          Peyman malek
        </Link>
      </footer>
    </>
  );
};

export default Layout;
