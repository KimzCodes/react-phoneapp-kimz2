import UserCard from "./UserCard";

const UserList = ({ persons, deleteUser, getUserData }) => {
  const renderList = persons.map((el) => (
    <UserCard
      key={el.id}
      item={el}
      deleteUser={deleteUser}
      getUserData={getUserData}
    />
  ));
  return <>{renderList}</>;
};

export default UserList;
