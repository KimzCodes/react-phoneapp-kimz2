import { useState, useRef } from "react";
import { Container, UserForm, LightBox, Button, Input } from "./components";
import UserList from "./components/user/UserList";

const App = () => {
  const [search, setSearch] = useState("");
  const [persons, setPerson] = useState([
    { id: 1, name: "John do", phone: "01010111", city: "taxes" },
    { id: 2, name: "kareem nour", phone: "01010111", city: "giza" },
  ]);

  const [toggleLightBox, setToggleLightBox] = useState(false);

  const selectedUser = useRef("");

  const lightBoxHandler = (toggle) => {
    setToggleLightBox(toggle);
    if (!toggle) selectedUser.current = "";
  };

  const deleteUser = (id) => {
    setPerson((prev) => prev.filter((el) => el.id !== id));
  };

  const saveUser = (data) => {
    const userExist = persons.find((el) => el.id === data.id);
    if (userExist) {
      setPerson(
        persons.map((el) => {
          if (el.id === data.id) {
            return { ...data };
          } else {
            return el;
          }
        })
      );
    } else {
      setPerson((prev) => [...prev, data]);
    }

    lightBoxHandler(false);
  };

  const getUserDataHandler = (data) => {
    selectedUser.current = data;
    lightBoxHandler(true);
  };

  const returnPersons = () => {
    if (search.length > 0) {
      return persons.filter(
        (el) => el.name.includes(search) || el.city.includes(search)
      );
    }
    return persons;
  };

  return (
    <Container>
      <Input
        name="filter"
        placeholder="filter"
        value={search.name}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button onClick={() => lightBoxHandler(true)}>Insert Person</Button>
      {toggleLightBox ? (
        <LightBox close={() => lightBoxHandler(false)}>
          <UserForm saveUser={saveUser} selectedUser={selectedUser.current} />
        </LightBox>
      ) : null}

      <UserList
        persons={returnPersons()}
        deleteUser={deleteUser}
        getUserData={getUserDataHandler}
      />
    </Container>
  );
};

export default App;
