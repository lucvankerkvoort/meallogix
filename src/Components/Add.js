import React, { useState } from "react";

const Add = () => {
  const [values, setValues] = useState({});
  const {
    state: {
      character: {
        busy,
        entities = {},
        entities: {
          properties: {
            name = "",
            height = "",
            birth_year = "",
            eye_color = "",
          } = {},
        } = {},
      } = {},
    },
  } = useContext(UsersContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addPerson();
      }}
    >
      <input
        id="name"
        onClick={(e) => setValues({ [e.target.id]: e.target.value })}
      />
      <input
        id="height"
        onClick={(e) => setValues({ [e.target.id]: e.target.value })}
      />
      <input
        id="birth_year"
        onClick={(e) => setValues({ [e.target.id]: e.target.value })}
      />
      <input
        id="eye_color"
        onClick={(e) => setValues({ [e.target.id]: e.target.value })}
      />
      <input />
      <input />
      <input />
    </form>
  );
};

export default Add;
