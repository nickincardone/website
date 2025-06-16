import React from "react";

interface Skill {
  name: string;
  subSkills?: string[];
}

interface OtherSkillsProps {
  skills: Skill[];
}

const OtherSkills: React.FC<OtherSkillsProps> = (props) => {
  function generateInnerList(subSkills: string[] | null) {
    if (subSkills === null) return null;
    const innerList = subSkills.map((item, index) => (
      <li key={index}>{item}</li>
    ));
    return <ul>{innerList}</ul>;
  }

  function OuterList(props: { skill: Skill }) {
    return (
      <li>
        <b>{props.skill.name}</b>
        {props.skill.subSkills && generateInnerList(props.skill.subSkills)}
      </li>
    );
  }

  function generateLists() {
    return props.skills.map((skill, index) => (
      <OuterList skill={skill} key={index} />
    ));
  }

  return <ul>{generateLists()}</ul>;
};

export default OtherSkills;
