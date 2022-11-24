import styles from "./user.module.css";
import { Button } from "../index";

const UserCard = ({ item, deleteUser }) => {
  return (
    <div className={styles.userCard}>
      <ul>
        <li>name:{item.name}</li>
        <li>phone:{item.phone}</li>
        <li>city:{item.city}</li>
      </ul>
      <div className="btnGroup">
        <Button>Edit</Button>
        <Button onClick={() => deleteUser(item.id)} color="danger">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default UserCard;
