import { useState } from "react";
import { Container, UserForm, LightBox, Button } from "./components";
import UserList from "./components/user/UserList";

const App = () => {
  const [persons, setPerson] = useState([
    { id: 1, name: "John do", phone: "01010111", city: "taxes" },
    { id: 2, name: "kareem nour", phone: "01010111", city: "giza" },
  ]);

  const [toggleLightBox, setToggleLightBox] = useState(false);

  const deleteUser = (id) => {
    setPerson((prev) => prev.filter((el) => el.id !== id));
  };

  const insertUser = (data) => {
    data.id = Math.floor(Math.random() * 100);
    setPerson((prev) => [...prev, data]);
  };

  return (
    <Container>
      <Button onClick={() => setToggleLightBox(true)}>Insert Person</Button>
      {toggleLightBox ? (
        <LightBox closeHandler={() => setToggleLightBox(false)}>
          <UserForm insertUser={insertUser} />
        </LightBox>
      ) : null}

      <UserList persons={persons} deleteUser={deleteUser} />
    </Container>
  );
};

export default App;
