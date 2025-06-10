import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import { SiKubernetes } from "react-icons/si";

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
                {skills.fontAwesomeClassname === "Kubernetes" ? (
                  
                  <SiKubernetes />
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
