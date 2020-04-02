import React from 'react';

const otherSkills = (props) => {

  function generateInnerList(subSkills) {
    if (subSkills === null) return null;
    const innerList = subSkills.map((item, index) => {
      return (
        <li key={index}>{item}</li>
      )
    });
    return (
      <ul>{innerList}</ul>
    )

  }

  function OuterList(props) {
    return (
      <li>
        <b>{props.skill.name}</b>
        {generateInnerList(props.skill.subSkills)}
      </li>
    )
  }

  function generateLists() {
    return props.skills.map((skill, index) => {
      return (
        <OuterList skill={skill} key={index}/>
      )
    });
  }

  return (
    <ul>
      {generateLists()}
    </ul>
  );
};

export default otherSkills;
