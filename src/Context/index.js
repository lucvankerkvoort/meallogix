import React, { createContext, useState } from "react";

export const UsersContext = createContext();

export const UsersProvider = (props) => {
  const [state, dispatch] = useState({
    people: { entities: [], busy: false },
    character: { entities: {}, busy: false },
    edit: false,
    add: false,
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

  const setAdd = (add) => {
    return dispatch({ ...state, add });
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

  const addPerson = ({ name }) => {
    const {
      people: { entities },
    } = state;

    const newEntities = entities;
    let number = 0;
    entities.forEach((item) => {
      if (parseInt(item.uid) > number) {
        number = parseInt(item.uid);
      }
    });
    newEntities.push({ uid: String(number + 1), name });

    return dispatch({
      ...state,
      people: { entities: newEntities },
      add: false,
    });
  };

  return (
    <UsersContext.Provider
      value={{
        state,
        dispatch,
        getPeople,
        getCharacter,
        editPerson,
        addPerson,
        removePerson,
        setEdit,
        setAdd,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};
