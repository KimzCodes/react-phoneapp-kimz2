import UserCard from "./UserCard";

const UserList = ({ persons, deleteUser }) => {
  const peronsHandler = persons.map((el) => (
    <UserCard key={el.id} item={el} deleteUser={deleteUser} />
  ));
  return <>{peronsHandler}</>;
};

export default UserList;
