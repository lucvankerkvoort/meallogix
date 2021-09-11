import React, { useState, useContext } from "react";
import { UsersContext } from "../Context";

const Add = () => {
  const [values, setValues] = useState({});
  const { addPerson } = useContext(UsersContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addPerson(values);
      }}
    >
      <label>Name</label>
      <input
        id="name"
        onChange={(e) => {
          console.log("value", e.target.value);
          setValues({ [e.target.id]: e.target.value });
        }}
      />
    </form>
  );
};

export default Add;
