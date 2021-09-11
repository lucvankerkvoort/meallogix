import React, { useContext, useEffect } from "react";
import { UsersContext } from "../Context";

const Characters = () => {
  const { state, getPeople } = useContext(UsersContext);
  const { people = [] } = state;

  useEffect(() => {
    getPeople();
  });

  return (
    <div>
      {people.map((character) => (
        <p>{character.name}</p>
      ))}
    </div>
  );
};

export default Characters;
