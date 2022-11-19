import { useState } from "react";
import { Button } from "../../layout";

const UserForm = ({ insertUser }) => {
  //   const [input, setInput] = useState({
  //     name: "",
  //     phone: "",
  //     city: "",
  //     gender: "",
  //   });

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 100);
    const person = { id, name, phone, city, gender };
    insertUser(person);
    setName("");
    setPhone("");
    setCity("");
    setGender("");
  };
  return (
    <form onSubmit={formHandler}>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        name="city"
        placeholder="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <br />
      <input
        type="text"
        name="phone"
        placeholder="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <input
        type="text"
        name="gender"
        placeholder="gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />
      <br />
      <Button type="submit">Insert</Button>
    </form>
  );
};

export default UserForm;
