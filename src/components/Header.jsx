import styles from "../styles/Header.module.css"
import {Link} from "react-router-dom";
import {useState} from "react";

export default function Header() {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  return (
    <div className={styles.navContainer}>
      <Link to="/">
        <h1 className={styles.logo}>
        <span>F</span>
        <span>L</span>
        <span>A</span>
        <span>V</span>
        <span>I</span>
        <span>O</span>
        </h1>
      </Link>
      {/* <ul className={styles.navMenu}> */}
      <ul
        className={
          click ? styles.navMenu : `${styles.navMenu} ${styles.active}`
        }
      >
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/projects">
          <li>Projects</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>

      {/* WRAPPER MENU */}
      <div
        className={
          click
            ? `${styles.wrapperMenu}`
            : `${styles.wrapperMenu} ${styles.open}`
        }
        onClick={handleClick}
      >
        <div
          className={`${styles.lineMenu} ${styles.half} ${styles.start}`}
        ></div>
        <div className={styles.lineMenu}></div>
        <div
          className={`${styles.lineMenu} ${styles.half} ${styles.end}`}
        ></div>
      </div>
    </div>
  );
}
