import { useState } from "react";
import { Button, Input } from "./../../index";

const UserForm = ({ insertUser }) => {
  const [input, setInput] = useState({ name: "", phone: "", city: "" });

  const inputHandler = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setInput({ ...input, [inputName]: inputValue });
  };

  const formHandler = (e) => {
    e.preventDefault();
    insertUser(input);
    setInput({ name: "", phone: "", city: "" });
  };

  return (
    <form onSubmit={formHandler}>
      <Input
        type="email"
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
