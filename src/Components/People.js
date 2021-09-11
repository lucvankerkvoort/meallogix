import React, { useContext, useEffect } from "react";
import { UsersContext } from "../Context";

const People = () => {
  const { state, getPeople, getCharacter } = useContext(UsersContext);
  const { people = [] } = state;

  useEffect(() => {
    getPeople();
  }, []);

  console.log(state);
  return (
    <div>
      {people.map((character, index) => (
        <div key={index} onClick={() => getCharacter(character.uid)}>
          {character.name}
        </div>
      ))}
    </div>
  );
};

export default People;
