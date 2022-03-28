import React from "react";
import CardProfile from "../../Components/CardProfile";

import "../../App.css";
import styles from "./Home.module.css";
import CardLinks from "../../Components/CardLinks";
import CardTechs from "../../Components/CardTechs";
import CardExtended from "../../Components/CardExtended";
import CardProjects from "../../Components/CardProjects";
import CardRecentsPosts from "../../Components/CardRecentsPosts";

import { useState, useEffect } from "react";
const Home = () => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    const getGithubUser = async () => {
      try {
        const res = await fetch("https://api.github.com/users/dshzr");
        const json = await res.json();
        setUser(json);
      } catch (err) {
        console.log("error: " + err);
      }
    };
    const getGithubRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/dshzr/repos");
        const json = await res.json();
        setRepos(json);
      } catch (err) {
        console.log("error: " + err);
      }
    };
    getGithubUser();
    getGithubRepos();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.leftsidebar}>
        <CardProfile />
        <CardLinks />
        <CardTechs />
      </div>
      <div className={styles.rightsidebar}>
        <CardExtended
          titulo="My Projects"
          info={!showAll ? "Show All" : "Hide"}
          setShowAll={setShowAll}
          showAll={showAll}
        />
        <div className={styles.projetos}>
          {repos && !showAll
            ? repos
                .slice(0, 4)
                .sort()
                .map((repositorio) => {
                  return (
                    <CardProjects
                      repositorio={repositorio}
                      nome={repositorio.name}
                      stars={repositorio.stargazers_count}
                      forks={repositorio.forks}
                      description={
                        repositorio.description
                          ? repositorio.description
                          : "Este repositório não contém nenhuma descrição."
                      }
                    />
                  );
                })
            : repos &&
              showAll &&
              repos.map((repositorio) => {
                return (
                  <CardProjects
                    repositorio={repositorio}
                    nome={repositorio.name}
                    stars={repositorio.stargazers_count}
                    forks={repositorio.forks}
                    description={
                      repositorio.description
                        ? repositorio.description
                        : "Este repositório não contém nenhuma descrição."
                    }
                  />
                );
              })}
        </div>
        <CardExtended titulo="Recent Posts" />
        <CardRecentsPosts />
      </div>
    </div>
  );
};

export default Home;
