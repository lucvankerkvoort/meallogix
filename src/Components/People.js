import React, { useContext, useEffect } from "react";
import { UsersContext } from "../Context";

const People = () => {
  const {
    state: { people = [] },
    getPeople,
    getCharacter,
  } = useContext(UsersContext);

  useEffect(() => {
    getPeople();
  }, []);

  console.log(people);
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
