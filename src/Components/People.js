import React, { useContext, useEffect, useState } from "react";
import { UsersContext } from "../Context";
import Remove from "./Remove";
import Edit from "./Edit";
import spinner from "../Assets/1484.gif";

const People = () => {
  const [characterInfo, setCharacterInfo] = useState(0);
  const {
    state = {},
    state: {
      people: { entities = [], busy },
      edit,
    },
    getPeople,
    setEdit,
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
        <>
          <div key={index} onClick={() => getCharacter(character.uid)}>
            {character.name}
          </div>
          <Remove id={character.uid} />
          <p
            onClick={() => {
              console.log(!edit);
              setEdit(!edit);
              setCharacterInfo({ id: character.uid, name: character.name });
            }}
          >
            Edit
          </p>
        </>
      ))}
      {edit && <Edit info={characterInfo} />}
    </div>
  );
};

export default People;
