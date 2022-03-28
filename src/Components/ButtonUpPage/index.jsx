import React from "react";
import styles from "./ButtonUpPage.module.css";
const ButtonUpPage = () => {
  function upPage() {
    window.scroll(0, 0);
  }
  return (
    <div className={styles.botao} onClick={upPage}>
      ⬆
    </div>
  );
};

export default ButtonUpPage;
