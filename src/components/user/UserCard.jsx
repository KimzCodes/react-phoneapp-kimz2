import styles from "./user.module.css";
import { Button, ButtonGroup } from "../../layout";

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
      <ButtonGroup>
        <Button action={deleteHandler}>Delete</Button>
        <Button color="danger">Edit</Button>
      </ButtonGroup>
    </div>
  );
};

export default UserCard;
