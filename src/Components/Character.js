import React, { useContext } from "react";
import { UsersContext } from "../Context";
import isEmpty from "../Utils/isEmpty";
const Character = () => {
  const {
    state: {
      character = {},
      character: {
        properties: {
          name = "",
          height = "",
          birth_year = "",
          eye_color = "",
        } = {},
      } = {},
    },
  } = useContext(UsersContext);

  console.log(character);

  return (
    !isEmpty(character) && (
      <ul>
        <li>Name: {name}</li>
        <li>Height: {height}</li>
        <li>Birth Year: {birth_year}</li>
        <li>Eye Color: {eye_color}</li>
      </ul>
    )
  );
};

export default Character;
