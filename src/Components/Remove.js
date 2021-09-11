import React, { useContext } from "react";
import { UsersContext } from "../Context";

const Remove = (id) => {
  const { removePerson } = useContext(UsersContext);

  return <p onClick={() => removePerson(id)}>X</p>;
};

export default Remove;
