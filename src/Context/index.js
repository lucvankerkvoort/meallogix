import React, { createContext, useReducer, useState } from "react";

export const UsersContext = createContext();

export const UsersProvider = (props) => {
  const [state, dispatch] = useState([]);
  const getPeople = async () => {
    return await fetch("https://www.swapi.tech/api/people")
      .then((res) => res.json())
      .then((starWarsCharacters) =>
        dispatch({ people: starWarsCharacters.results })
      )
      .catch((error) => console.log("error happened", error));
  };
  const getCharacter = async (id) => {
    return await fetch(`https://www.swapi.tech/api/people/${id}`)
      .then((res) => res.json())
      .then((starWarsCharacter) =>
        dispatch({ character: starWarsCharacter.result })
      )
      .catch((error) => console.log("error happened", error));
  };
  return (
    <UsersContext.Provider value={{ state, dispatch, getPeople, getCharacter }}>
      {props.children}
    </UsersContext.Provider>
  );
};
