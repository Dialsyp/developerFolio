import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";
import { SiKubernetes } from "react-icons/si";
import { SiTerraform } from "react-icons/si";
import { SiAnsible } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiNginx } from "react-icons/si";
import { SiTraefikproxy } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiGithubactions } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiGrafana } from "react-icons/si";
import { SiPrometheus } from "react-icons/si";
import { SiJenkins } from "react-icons/si";
import { SiCaddy } from "react-icons/si";
import { IoLogoWindows } from "react-icons/io";
import { SiSonar } from "react-icons/si";
import { SiApache } from "react-icons/si";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            console.log(skills.fontAwesomeClassname);
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                {skills.skillName === "Kubernetes" ? (
                  <SiKubernetes className="custom-kubernetes-icon" />
                ) : skills.skillName === "Terraform" ? (
                  <SiTerraform className="custom-kubernetes-icon" />
                ) : skills.skillName === "Ansible" ? (
                  <SiAnsible className="custom-kubernetes-icon" />
                ) : skills.skillName === "Spring Boot" ? (
                  <SiSpringboot className="custom-kubernetes-icon" />
                ) : skills.skillName === "Next.js" ? (
                  <RiNextjsFill className="custom-kubernetes-icon" />
                ) : skills.skillName === "Nginx" ? (
                  <SiNginx className="custom-kubernetes-icon" />
                ) : skills.skillName === "Traefik" ? (
                  <SiTraefikproxy className="custom-kubernetes-icon" />
                ) : skills.skillName === "Power BI" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="50"
                    height="50"
                    aria-label="Power Automate"
                    fill="currentColor"
                    className="custom-svg-icon"
                  >
                    <path d="M8 7C4.69 7 2 9.69 2 13v20c0 2.97 2.16 5.44 5 5.91V36.87C5.27 36.43 4 34.86 4 33V13c0-2.21 1.79-4 4-4h33c2.21 0 4 1.79 4 4v20c0 1.86-1.27 3.43-3 3.87v2.04c2.84-0.47 5-2.94 5-5.91V13c0-3.31-2.69-6-6-6H8zm28.5 8c-1.381 0-2.5 1.119-2.5 2.5v24c0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5v-24c0-1.381-1.119-2.5-2.5-2.5zm-16 6c-1.381 0-2.5 1.119-2.5 2.5v18c0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5v-18c0-1.381-1.119-2.5-2.5-2.5zm8 4c-1.381 0-2.5 1.119-2.5 2.5v14c0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5v-14c0-1.381-1.119-2.5-2.5-2.5zm-16 5c-1.381 0-2.5 1.119-2.5 2.5v9c0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5v-9c0-1.381-1.119-2.5-2.5-2.5z" />
                  </svg>
                ) : skills.skillName === "TypeScript" ? (
                    <SiTypescript className="custom-kubernetes-icon" />
                  ) : skills.skillName === "JavaScript" ? (
                    <SiJavascript className="custom-kubernetes-icon" />
                  ) : skills.skillName === "NestJS" ? (
                    <SiNestjs className="custom-kubernetes-icon" />
                  ) : skills.skillName === "Git" ? (
                    <SiGithub className="custom-kubernetes-icon" />
                  ) : skills.skillName === "GitHub Actions" ? (
                    <SiGithubactions className="custom-kubernetes-icon" />
                  ) : skills.skillName === "MySQL" ? (
                    <SiMysql className="custom-kubernetes-icon" />
                  ) : skills.skillName === "PostgreSQL" ? (
                    <SiPostgresql className="custom-kubernetes-icon" />
                  ) : skills.skillName === "MongoDB" ? (
                    <SiMongodb className="custom-kubernetes-icon" />
                  ) : skills.skillName === "Grafana" ? (
                    <SiGrafana className="custom-kubernetes-icon" />
                  ) : skills.skillName === "Prometheus" ? (
                    <SiPrometheus className="custom-kubernetes-icon" />
                  ) : skills.skillName === "Jenkins" ? (
                    <SiJenkins className="custom-kubernetes-icon" />
                  ) : skills.skillName === "Caddy" ? (
                    <SiCaddy className="custom-kubernetes-icon" />
                  ) : skills.skillName === "SonarQube" ? (
                    <SiSonar className="custom-kubernetes-icon" />
                  ) : skills.skillName === "Windows" ? (
                    <IoLogoWindows className="custom-kubernetes-icon" />
                  ) : skills.skillName === "Apache2" ? (
                    <SiApache className="custom-kubernetes-icon" />
                  ) : (
                    <i className={skills.fontAwesomeClassname}></i>
                  )}

                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
