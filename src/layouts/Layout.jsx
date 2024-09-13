import { TiHeartOutline } from "react-icons/ti";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>
          <a>MahdiMadani</a> | React.js Full Course
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        Developer by Mahdi with{" "}
        <span>
          <TiHeartOutline />
        </span>{" "}
      </footer>
    </>
  );
}

export default Layout;
