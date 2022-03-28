import React from "react";
import styles from "./CardRecentsPosts.module.css";
import profile from "../../Assets/img/profilepic.jpg";

const CardRecentsPosts = () => {
  return (
    <div className={styles.card + ' recents'}>
      <img src={profile} alt="" />
      <div className={styles.infos}>
        <h4>Erro adb devices no Genymotion e Android Studio (React Native)</h4>
        <span>2 anos atrás</span>
        <p>Erro adb devices no Genymotion e Android Studio (React Native)</p>
      </div>
    </div>
  );
};

export default CardRecentsPosts;
