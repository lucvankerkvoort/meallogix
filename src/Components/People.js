import React, { useContext, useEffect } from "react";
import { UsersContext } from "../Context";
import spinner from "../Assets/1484.gif";

const People = () => {
  const {
    state = {},
    state: {
      people: { entities = [], busy },
    },
    getPeople,
    getCharacter,
  } = useContext(UsersContext);

  useEffect(() => {
    getPeople();
  }, []);

  console.log("state", state);
  return busy ? (
    <img src={spinner} alt="spinner" />
  ) : (
    <div>
      {entities.map((character, index) => (
        <div key={index} onClick={() => getCharacter(character.uid)}>
          {character.name}
          
        </div>
      ))}
    </div>
  );
};

export default People;
