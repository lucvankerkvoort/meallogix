import React, { useState, useContext, useEffect } from "react";
import { UsersContext } from "../Context";

const Edit = ({ info: { id, name } }) => {
  const [edit, setValue] = useState("");
  const { editPerson, setEdit } = useContext(UsersContext);

  useEffect(() => {
    setValue(name);
  }, []);
  console.log(name);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editPerson({ id, edit });
      }}
    >
      <label>Edit</label>
      <input
        onChange={(e) => {
          console.log(e);
          setValue(e.target.value);
        }}
        value={edit}
      />
      <button>Submit</button>
    </form>
  );
};

export default Edit;
