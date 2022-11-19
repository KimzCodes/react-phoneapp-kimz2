import { useState } from "react";
import Container from "./layout/Container";
import UserList from "./components/user/UserList";
import UserForm from "./components/user/UserForm";
import { LightBox } from "./layout";

const App = () => {
  const [persons, setPerson] = useState([
    {
      id: 1,
      name: "John do",
      phone: "01010111",
      city: "taxes",
      gender: "male",
    },
    {
      id: 2,
      name: "kareem nour",
      phone: "01010111",
      city: "giza",
      gender: "female",
    },
  ]);

  const [toggleLightBox, setToggleLightBox] = useState(false);

  const deleteUser = (id) => {
    setPerson((prev) => prev.filter((el) => el.id !== id));
  };

  const insertUser = (input) => {
    const id = Math.floor(Math.random() * 100);
    const newUser = { ...input, id };
    setPerson([...persons, newUser]);
  };

  return (
    <Container>
      <br />
      {toggleLightBox ? (
        <LightBox>
          <Container>
            <UserForm insertUser={insertUser} />
          </Container>
        </LightBox>
      ) : null}

      <br />
      <br />
      <UserList persons={persons} deleteUser={deleteUser} />
    </Container>
  );
};

export default App;
