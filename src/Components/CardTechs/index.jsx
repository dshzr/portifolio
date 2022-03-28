import React from "react";
import styles from "./CardTechs.module.css";
const techs = [
  "javascript",
  "React JS",
  "HTML",
  "CSS",
  "BOOTSTRAP",
  "LARAVEL",
  "PHP",
  "GIT",
  "GITHUB",
  "IONIC",
  "REACT NATIVE",
];
const CardTechs = () => {
  return (
    <div className={styles.card}>
      <h2>Tecnologias</h2>
      <div className={styles.techs}>
        {techs.map((tech) => (
          <span key={tech}>
            <a target="_blank" href={`https://www.google.com/search?q=${tech}`}>
              {tech}
            </a>
          </span>
        ))}
      </div>
    </div>
  );
};

export default CardTechs;
