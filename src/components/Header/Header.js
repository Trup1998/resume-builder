import React from "react";

import resumeSvg from "../../assets/resume.svg";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          E<span> -Resume</span> 
        </p>
        <p className={styles.heading}>
         <span></span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
    </div>
  );
}

export default Header;
