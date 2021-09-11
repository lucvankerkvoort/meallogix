import React, { createContext, useState } from "react";

export const UsersContext = createContext();

export const UsersProvider = (props) => {
  const [state, dispatch] = useState({
    people: { entities: [], busy: false },
    character: { entities: {}, busy: false },
    edit: false,
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

  const setEdit = (edit) => {
    console.log("edit inside", edit);
    return dispatch({ ...state, edit });
  };

  const editPerson = ({ id, edit }) => {
    const {
      people: { entities },
    } = state;
    console.log(id, edit);
    const editedEntities = entities.map((item) => {
      if (item.uid === id) {
        return { ...item, name: edit };
      }
      return item;
    });

    return dispatch({
      ...state,
      people: { entities: editedEntities },
      edit: false,
    });
  };

  const removePerson = ({ id }) => {
    const {
      people: { entities },
    } = state;
    const cleanedEntity = entities.filter((item) => item.uid !== id);

    return dispatch({ ...state, people: { entities: cleanedEntity } });
  };

  const add = () => {
    // push the new person into the people array, give him a uid which is the length of the array +1
  };
  const title = () => {
    // set a new value or replace the value of the title
  };
  return (
    <UsersContext.Provider
      value={{
        state,
        dispatch,
        getPeople,
        getCharacter,
        editPerson,
        removePerson,
        setEdit,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};
