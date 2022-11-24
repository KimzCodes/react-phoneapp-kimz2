import UserCard from "./UserCard";

const UserList = ({ persons, deleteUser }) => {
  const renderList = persons.map((el) => (
    <UserCard key={el.id} item={el} deleteUser={deleteUser} />
  ));
  return <>{renderList}</>;
};

export default UserList;
