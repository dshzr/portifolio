import React from "react";
import styles from "./CardLinks.module.css";

import mapIcon from "../../Assets/Icons/map-pin.svg";
import mail from "../../Assets/Icons/mail.svg";
import github from "../../Assets/Icons/github.svg";
import linkedin from "../../Assets/Icons/linkedin.svg";
import globe from "../../Assets/Icons/globe.svg";
import briefcase from "../../Assets/Icons/briefcase.svg";

const icones = [
  {
    icon: mapIcon,
    info: "Brasil",
  },
  {
    icon: briefcase,
    info: "Léo Andrade Tecnologia",
    link: "https://www.linkedin.com/in/leandrotandrade/",
  },
  {
    icon: github,
    info: "dshzr",
    link: "https://github.com/dshzr",
  },
  {
    icon: linkedin,
    info: "wellington-santiago",
    link: "https://www.linkedin.com/in/wellington-santiago-161201201/",
  },
  {
    icon: globe,
    info: "portifolio-wellingtonsantiago.netlify.app",
    link: "https://portifolio-wellingtonsantiago.netlify.app/",
  },
  {
    icon: mail,
    info: "wellingtonhmt2011@gmail.com",
  },
];

const CardLinks = () => {
  return (
    <div className={styles.card}>
      {icones.map((icone, index) => {
        return (
          <span className={styles.row} key={index}>
            <img src={icone.icon} alt="" />
            <a href={icone.link} target="_blank" style={{ color: "#837e9f" }}>
              <p>{icone.info}</p>
            </a>
          </span>
        );
      })}
    </div>
  );
};

export default CardLinks;
