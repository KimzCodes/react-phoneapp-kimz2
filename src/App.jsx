import { useState } from "react";
import Container from "./layout/Container";
import UserList from "./components/user/UserList";

const App = () => {
  const [persons, setPerson] = useState([
    { id: 1, name: "John do", phone: "01010111", city: "taxes" },
    { id: 2, name: "kareem nour", phone: "01010111", city: "giza" },
  ]);

  const deleteUser = (id) => {
    setPerson((prev) => prev.filter((el) => el.id !== id));
  };

  return (
    <Container>
      <UserList persons={persons} deleteUser={deleteUser} />
    </Container>
  );
};

export default App;
