import React, { createContext, useState } from "react";

export const UsersContext = createContext();

export const UsersProvider = (props) => {
  const [state, dispatch] = useState({
    people: { entities: [], busy: false },
    character: { entities: {}, busy: false },
  });
  const getPeople = async () => {
    dispatch({ ...state, people: { busy: true } });
    return await fetch("https://www.swapi.tech/api/people")
      .then((res) => res.json())
      .then((starWarsCharacters) =>
        dispatch({
          ...state,
          people: { entities: starWarsCharacters.results, busy: false },
        })
      )
      .catch((error) => console.log("error happened", error));
  };
  const getCharacter = async (id) => {
    dispatch({ ...state, character: { busy: true } });
    return await fetch(`https://www.swapi.tech/api/people/${id}`)
      .then((res) => res.json())
      .then((starWarsCharacter) =>
        dispatch({
          ...state,
          character: { entities: starWarsCharacter.result, busy: false },
        })
      )
      .catch((error) => console.log("error happened", error));
  };
  return (
    <UsersContext.Provider value={{ state, dispatch, getPeople, getCharacter }}>
      {props.children}
    </UsersContext.Provider>
  );
};
