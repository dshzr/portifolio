import React from "react";
import styles from "./CardExtended.module.css";
const CardExtended = ({ titulo, info, setShowAll, showAll }) => {
  return (
    <div className={styles.card}>
      <h2>{titulo} </h2>
      <span onClick={() => setShowAll(!showAll)}>{info}</span>
    </div>
  );
};

export default CardExtended;
