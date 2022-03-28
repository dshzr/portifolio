import React from "react";
import styles from "./CardProfile.module.css";
import profilePic from "../../Assets/img/profilepic.jpg";
const CardProfile = () => {
  return (
    <div className={styles.card}>
      <img src={profilePic} alt="profile pic" />
      <h3>Wellington Santiago</h3>
      <span>Front End Developer</span>
    </div>
  );
};

export default CardProfile;
