import React, { useContext } from "react";
import { UsersContext } from "../Context";
import spinner from "../Assets/1484.gif";
import isEmpty from "../Utils/isEmpty";

const Character = () => {
  const {
    state: {
      character: {
        busy,
        entities = {},
        entities: {
          properties: {
            name = "",
            height = "",
            birth_year = "",
            eye_color = "",
          } = {},
        } = {},
      } = {},
    },
  } = useContext(UsersContext);

  return busy ? (
    <img src={spinner} alt="spinner" />
  ) : (
    !isEmpty(entities) && (
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
