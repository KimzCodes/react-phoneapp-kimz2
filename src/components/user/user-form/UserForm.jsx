import { useState, useEffect } from "react";
import { Button, Input } from "./../../index";

const UserForm = ({ saveUser, selectedUser }) => {
  const [input, setInput] = useState({ name: "", phone: "", city: "", id: "" });

  useEffect(() => {
    if (selectedUser) {
      setInput((prev) => ({ ...prev, ...selectedUser }));
    }
  }, [selectedUser]);

  const inputHandler = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setInput({ ...input, [inputName]: inputValue });
  };

  const formHandler = (e) => {
    e.preventDefault();
    saveUser(input);
    setInput({ name: "", phone: "", city: "", id: "" });
  };

  return (
    <form onSubmit={formHandler}>
      <Input
        name="name"
        placeholder="name"
        value={input.name}
        onChange={inputHandler}
      />
      <br />
      <Input
        name="phone"
        placeholder="phone"
        value={input.phone}
        onChange={inputHandler}
      />
      <br />
      <Input
        name="city"
        placeholder="city"
        value={input.city}
        onChange={inputHandler}
      />

      <br />
      <Button>Save</Button>
    </form>
  );
};

export default UserForm;
