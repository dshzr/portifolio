import React from "react";
import styles from "./CardProjects.module.css";
import star from "../../Assets/Icons/star.svg";
import branch from "../../Assets/Icons/git-branch.svg";
const CardProjects = ({ forks, stars, nome, description, repositorio }) => {
  const openLink = (repo) => {
    window.open(repo.html_url, "_blank");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card} onClick={() => openLink(repositorio)}>
        <div className={styles.headercard}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#837E9F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-folder"
          >
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </svg>
          <h5>{nome}</h5>
        </div>
        <p>{description}</p>
        <div className={styles.iconescontainer}>
          <div className={styles.lefticons}>
            <div className={styles.icone}>
              <img src={star} />
              <span>{stars}</span>
            </div>
            <div className={styles.icone}>
              <img src={branch} />
              <span>{forks}</span>
            </div>
          </div>
          <div className={styles.righticons}>
            <span>Javascript</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProjects;
