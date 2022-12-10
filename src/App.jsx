import { useState, useRef, useEffect } from "react";
import { Container, UserForm, LightBox, Button, Input } from "./components";
import UserList from "./components/user/UserList";

const App = () => {
  const [search, setSearch] = useState("");
  const [persons, setPerson] = useState([]);
  const [toggleLightBox, setToggleLightBox] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const selectedUser = useRef("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:5000/users");
        const data = await res.json();
        setIsLoading(false);
        setPerson((prev) => [...prev, ...data]);
      } catch (error) {
        setIsLoading(false);
        alert("error from server");
      }
    })();
  }, []);

  const lightBoxHandler = (toggle) => {
    setToggleLightBox(toggle);
    if (!toggle) selectedUser.current = "";
  };

  const deleteUser = async (id) => {
    setIsLoading(true);
    try {
      await fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE",
      });
      setPerson((prev) => prev.filter((el) => el.id !== id));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      alert("can not delete error from server: ", error.message);
    }
  };

  const saveUser = async (data) => {
    const userExist =
      persons.length > 0 && persons.find((el) => el.id === data.id);
    setIsLoading(true);
    //edit user
    if (userExist) {
      try {
        await fetch(`http://localhost:5000/users/${data.id}`, {
          method: "PATCH",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        setPerson(
          persons.map((el) => {
            if (el.id === data.id) {
              return { ...data };
            } else {
              return el;
            }
          })
        );
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        alert("can not delete error from server: ", error.message);
      }

      //insert user
    } else {
      try {
        const res = await fetch("http://localhost:5000/users/", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        const resData = await res.json();
        setPerson((prev) => [...prev, resData]);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        alert("can not delete error from server: ", error.message);
      }
    }

    lightBoxHandler(false);
  };

  const getUserDataHandler = (data) => {
    selectedUser.current = data;
    lightBoxHandler(true);
  };

  const returnPersons =
    search.length > 0
      ? persons.length > 0 &&
        persons.filter(
          (el) => el.name.includes(search) || el.city.includes(search)
        )
      : persons;

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
      {isLoading ? (
        <div>
          <p>loading please wait...</p>
        </div>
      ) : (
        <UserList
          persons={returnPersons}
          deleteUser={deleteUser}
          getUserData={getUserDataHandler}
        />
      )}
    </Container>
  );
};

export default App;
