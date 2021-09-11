import React, { createContext, useReducer } from "react";

export const UsersContext = createContext();

export const UsersProvider = (props) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "remove": {
        const people = state.people.find((item) => {
          return item.uid !== action.payload;
        });
        return Object.assign({}, state, { people });
      }
      case "add": {
        const people = state.people.push(action.payload);
        return Object.assign({}, state, { people });
      }
      default: {
        throw new Error();
      }
    }
  });
  const getPeople = async () => {
    return await fetch("https://www.swapi.tech/api/people")
      .then((res) => res.json())
      .then((result) => dispatch(result))
      .catch((error) => console.log("error happened", error));
  };
  const getCharacter = async (id) => {
    return await fetch(`https://www.swapi.tech/api/people/${id}`)
      .then((res) => res.json())
      .then((result) => dispatch(result))
      .catch((error) => console.log("error happened", error));
  };

  return (
    <UsersContext.Provider value={{ state, dispatch, getPeople, getCharacter }}>
      {props.children}
    </UsersContext.Provider>
  );
};
