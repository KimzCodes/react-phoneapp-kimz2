import styles from "./user.module.css";

const UserCard = ({ item, deleteUser }) => {
  const deleteHandler = () => {
    deleteUser(item.id);
  };
  return (
    <div className={styles.userCard}>
      <ul>
        <li>name:{item.name}</li>
        <li>phone:{item.phone}</li>
        <li>city:{item.city}</li>
      </ul>
      <div className="btnGroup">
        <div className="btn" onClick={deleteHandler}>
          Delete
        </div>
      </div>
    </div>
  );
};

export default UserCard;
